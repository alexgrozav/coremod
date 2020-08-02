import { resolve } from 'path';
import { CoremodConfiguration } from "coremod/src/types";

export const configuration: CoremodConfiguration = {
    modules: [
        [resolve(__dirname, 'module'), {
            something: true
        }]
    ]
};
