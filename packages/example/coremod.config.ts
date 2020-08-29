import { CoremodConfiguration } from "coremod";

import { module as LocalModule } from './modules/local-module';
import { module as IOCModule } from '@coremod/ioc';
import { module as LoggerModule } from '@coremod/logger';
import { module as ExpressModule } from '@coremod/express';
import { module as PublicModule } from '@coremod/public';
import { module as TypeORMModule } from '@coremod/typeorm';
import { module as AuthenticationModule } from '@coremod/authentication';

export const configuration: CoremodConfiguration = {
    modules: [
        IOCModule,
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
