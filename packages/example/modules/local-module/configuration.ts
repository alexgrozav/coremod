import { CoremodModuleRuntimeConfiguration } from "coremod";

export const configuration: CoremodModuleRuntimeConfiguration = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3030'
};
