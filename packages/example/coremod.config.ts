import { CoremodConfiguration } from "coremod";

import { module as LocalModule } from './modules/local-module';
import { module as LoggerModule } from '@coremod/logger/src';
import { module as ExpressModule } from '@coremod/express/src';
import { module as PublicModule } from '@coremod/public/src';
import { module as TypeORMModule } from '@coremod/typeorm/src';
import { module as AuthenticationModule } from '@coremod/authentication/src';

export const configuration: CoremodConfiguration = {
    modules: [
        [LocalModule, {
            something: true,
            configuration: {
                host: '3031'
            }
        }],
        LoggerModule,
        ExpressModule,
        [PublicModule, {
            favicon: false
        }],
        TypeORMModule,
        [AuthenticationModule, {
            configuration: {
                jwt: {
                    secretOrKey: '##helloworld1234##'
                }
            }
        }]
    ]
};
