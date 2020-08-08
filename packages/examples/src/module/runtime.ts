import {
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext,
    CoremodModuleRuntime,
    CoremodModuleOptions
} from "coremod/src/types";

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    console.log(context, configuration, moduleOptions)
};
