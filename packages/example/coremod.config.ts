import { CoremodConfiguration } from "coremod";

import { module as LocalModule } from './modules/local-module';
import { module as IOCModule } from '@coremod/ioc';
import { module as LoggerModule } from '@coremod/logger';
import { module as ExpressModule } from '@coremod/express';
import { module as PublicModule } from '@coremod/public';
import { module as TypeORMModule } from '@coremod/typeorm';
import { module as AuthenticationModule, currentUserChecker, authorizationChecker } from '@coremod/authentication';
import { User } from "@app/models/User";

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
        [ExpressModule, {
            authorizationChecker: authorizationChecker(User),
            currentUserChecker: currentUserChecker(User)
        }],
        [PublicModule, {
            favicon: false
        }],
        TypeORMModule,
        [AuthenticationModule, {
            model: User,
            configuration: {
                jwt: {
                    secretOrKey: '##helloworld1234##'
                }
            }
        }]
    ]
};
