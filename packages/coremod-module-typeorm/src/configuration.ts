import { resolve } from 'path';
import { CoremodModuleRuntimeConfiguration } from "coremod/src/types";

export const configuration: CoremodModuleRuntimeConfiguration = {
    application: {
        public: {
            maxAge: 31557600000
        }
    },
    paths: {
        public: resolve('.', 'public')
    },
};
