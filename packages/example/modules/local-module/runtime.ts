import {
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext,
    CoremodModuleRuntime,
    CoremodModuleOptions
} from "coremod";

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    console.log('Hello world!')
};
