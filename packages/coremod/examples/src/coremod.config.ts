import { resolve } from 'path';
import { CoremodConfiguration } from "coremod/src/types";

export const configuration: CoremodConfiguration = {
    modules: [
        [resolve(__dirname, 'module'), {
            something: true,
            configuration: {
                host: '3031'
            }
        }],
        require.resolve('@coremod/express'),
        [require.resolve('@coremod/public'), {
            favicon: false
        }],
        require.resolve('@coremod/authentication')
    ]
};