import { resolve } from 'path';
import { CoremodModuleRuntimeConfiguration } from "coremod";

export const configuration: CoremodModuleRuntimeConfiguration = {
    application: {
        public: {
            maxAge: 31557600000
        }
    },
    paths: {
        public: resolve(process.cwd(), 'public')
    },
};
