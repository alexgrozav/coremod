import yargs = require('yargs');
export declare type CoremodModuleRuntimeConfiguration = Record<string, any>;
export declare type CoremodModuleRuntimeContext = Record<string, any>;
export declare type CoremodCommands = (cli: typeof yargs) => void;
export declare type CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => Promise<any> | void;
export declare type CoremodModuleOptions = {
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
