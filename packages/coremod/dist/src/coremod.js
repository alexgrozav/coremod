"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coremod = void 0;
const tslib_1 = require("tslib");
const deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
const dotenv_1 = require("dotenv");
class Coremod {
    constructor(configuration) {
        this.configuration = configuration;
        this.runtimeContext = {};
        this.runtimeConfiguration = {};
        this.modules = [];
    }
    async initialize() {
        dotenv_1.config({ path: this.configuration.env });
        this.runtimeConfiguration.env = process.env.NODE_ENV || 'development';
        this.runtimeContext.onExit = this.onExit;
        if (!(this.configuration.modules && this.configuration.modules.length > 0)) {
            return;
        }
        for (let module of this.configuration.modules) {
            let moduleOptions = {};
            if (Array.isArray(module)) {
                [module, moduleOptions] = module;
            }
            // Extend module runtime configuration
            if (module.namespace) {
                this.runtimeConfiguration = deepmerge_1.default(this.runtimeConfiguration, {
                    [module.namespace]: deepmerge_1.default(module.configuration || {}, moduleOptions.configuration || {})
                });
            }
            else {
                this.runtimeConfiguration = deepmerge_1.default(this.runtimeConfiguration, deepmerge_1.default(module.configuration || {}, moduleOptions.configuration || {}));
            }
            // Extend module options
            moduleOptions = deepmerge_1.default(module.moduleOptions || {}, moduleOptions);
            // Store module and module options
            this.modules.push([module, moduleOptions]);
        }
    }
    async run() {
        for (const [module, moduleOptions] of this.modules) {
            await module.runtime(this.runtimeContext, this.runtimeConfiguration, moduleOptions);
        }
    }
    onExit(callback = () => { }) {
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
    }
    ;
}
exports.Coremod = Coremod;
//# sourceMappingURL=coremod.js.map