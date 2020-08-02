export type CoremodModuleOptions = Record<string, any>;
export type CoremodModuleRuntimeConfiguration = Record<string, any>;
export type CoremodModuleRuntimeContext = Record<string, any>;
export type CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => Promise<any> | void;

export interface CoremodModule {
    moduleOptions?: CoremodModuleOptions;
    configuration?: CoremodModuleRuntimeConfiguration;
    runtime: CoremodModuleRuntime;
}
