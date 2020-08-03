export type CoremodModuleRuntimeConfiguration = Record<string, any>;
export type CoremodModuleRuntimeContext = Record<string, any>;
export type CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => Promise<any> | void;
export type CoremodModuleOptions = {
    configuration?: CoremodModuleRuntimeConfiguration;
    [key: string]: any;
};

export interface CoremodModule {
    namespace: string;
    moduleOptions?: CoremodModuleOptions;
    configuration?: CoremodModuleRuntimeConfiguration;
    runtime: CoremodModuleRuntime;
}
