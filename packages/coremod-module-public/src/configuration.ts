import { resolve } from 'path';
import { CoremodModuleRuntimeConfiguration } from "coremod/src/types";

export const configuration: CoremodModuleRuntimeConfiguration = {
    paths: {
        public: resolve('.', 'public')
    },
};
