import yargs = require('yargs');
export type CoremodModuleRuntimeConfiguration = Record<string, any>;
export type CoremodModuleRuntimeContext = Record<string, any>;
export type CoremodCommands = (cli: typeof yargs) => void;
export type CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => Promise<any> | void;
export type CoremodModuleOptions = {
    configuration?: CoremodModuleRuntimeConfiguration;
    [key: string]: any;
};

export interface CoremodModule {
    namespace: string;
    commands?: CoremodCommands;
    moduleOptions?: CoremodModuleOptions;
    configuration?: CoremodModuleRuntimeConfiguration;
    runtime: CoremodModuleRuntime;
}
