import { CoremodConfiguration, CoremodModuleRuntimeContext, CoremodModule, CoremodModuleRuntimeConfiguration, CoremodModuleOptions } from "./types";
export declare class Coremod {
    configuration: CoremodConfiguration;
    runtimeContext: CoremodModuleRuntimeContext;
    runtimeConfiguration: CoremodModuleRuntimeConfiguration;
    modules: [CoremodModule, CoremodModuleOptions][];
    constructor(configuration: CoremodConfiguration);
    initialize(): void;
    run(): Promise<void>;
    onExit(callback?: () => void): void;
}
