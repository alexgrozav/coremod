import { CoremodModuleRuntimeConfiguration } from "coremod/src/types";

export const configuration: CoremodModuleRuntimeConfiguration = {
    example: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || '3030'
    }
};
