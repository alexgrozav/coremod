import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from 'coremod';
import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    if (moduleOptions.strategy === 'jwt') {
        passport.use(new JwtStrategy(configuration.authentication.jwt, async (jwtPayload, done) => {
            const user: any = await moduleOptions.repository.findOne(jwtPayload.sub);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }));
    }

    context.application.use(passport.initialize());
};
