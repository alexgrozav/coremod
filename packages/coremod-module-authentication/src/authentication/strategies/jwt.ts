import { CoremodModuleRuntimeContext, CoremodModuleRuntimeConfiguration, CoremodModuleOptions } from 'coremod';
import { Strategy } from 'passport-jwt';

export const jwtStrategy = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    return new Strategy(configuration.authentication.jwt,
        async (token, done) => {
            const user: any = await moduleOptions.repository.findOne(token.user);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
};
