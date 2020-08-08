import { resolve } from 'path';
import { CoremodConfiguration } from "coremod";

export const configuration: CoremodConfiguration = {
    modules: [
        [resolve(__dirname, 'modules', 'local-module'), {
            something: true,
            configuration: {
                host: '3031'
            }
        }],
        require.resolve('@coremod/logger'),
        require.resolve('@coremod/express'),
        [require.resolve('@coremod/public'), {
            favicon: false
        }],
        require.resolve('@coremod/typeorm'),
        [require.resolve('@coremod/authentication'), {
            configuration: {
                jwt: {
                    secretOrKey: '##helloworld1234##'
                }
            }
        }]
    ]
};
