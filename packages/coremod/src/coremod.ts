import deepmerge from 'deepmerge';
import {
    CoremodConfiguration,
    CoremodModuleRuntimeContext,
    CoremodModule,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleOptions
} from "./types";
import { config as dotenv } from "dotenv"

export class Coremod {
    public runtimeContext: CoremodModuleRuntimeContext = {};
    public runtimeConfiguration: CoremodModuleRuntimeConfiguration = {};
    public modules: [CoremodModule, CoremodModuleOptions][] = [];

    constructor(public configuration: CoremodConfiguration) {}

    public async initialize() {
        dotenv({ path: this.configuration.env });

        this.runtimeConfiguration.env = process.env.NODE_ENV || 'development';
        this.runtimeContext.onExit = this.onExit;

        if (!(this.configuration.modules && this.configuration.modules.length > 0)) {
            return;
        }

        for (let moduleName of this.configuration.modules) {
            let moduleOptions: CoremodModuleOptions = {};

            if (Array.isArray(moduleName)) {
                [moduleName, moduleOptions] = moduleName;
            }

            // Load module
            const { default: module } = await this.loadModule(moduleName as string) as { default: CoremodModule };

            // Extend module runtime configuration
            if (module.namespace) {
                this.runtimeConfiguration = deepmerge(this.runtimeConfiguration, {
                    [module.namespace]: deepmerge(module.configuration || {}, moduleOptions.configuration || {})
                });
            } else {
                this.runtimeConfiguration = deepmerge(this.runtimeConfiguration,
                    deepmerge(module.configuration || {}, moduleOptions.configuration || {}));
            }

            // Extend module options
            moduleOptions = deepmerge(module.moduleOptions || {}, moduleOptions);

            // Store module and module options
            this.modules.push([module, moduleOptions]);
        }
    }

    private async loadModule(moduleName: string) {
        return new Promise((resolve) => {
            import(require.resolve(moduleName as string)).then((module) => {
                resolve(module);
            });
        });
    }

    public async run() {
        for (const [module, moduleOptions] of this.modules) {
            await module.runtime(this.runtimeContext, this.runtimeConfiguration, moduleOptions);
        }
    }

    public onExit(callback = () => {}) {
        // Attach user callback to the process event emitter
        // If no callback, it will still exit gracefully on Ctrl-C
        process.on('cleanup', callback);

        // App specific cleaning before exiting
        process.on('exit', () => {
            // @ts-ignore
            process.emit('cleanup');
        });

        // catch ctrl+c event and exit normally
        process.on('SIGINT', () => {
            process.exit(2);
        });

        // Catch uncaught exceptions, trace, then exit normally
        process.on('uncaughtException', (error) => {
            console.error(error);
            process.exit(99);
        });
    };
}

