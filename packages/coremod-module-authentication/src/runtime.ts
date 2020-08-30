import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from 'coremod';
import express from 'express';
import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    const router = express.Router();

    if (moduleOptions.strategy === 'jwt') {
        passport.use(new JwtStrategy(configuration.authentication.jwt, async (jwtPayload, done) => {
            const user: any = await moduleOptions.repository.findOne(jwtPayload.sub);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }));

        router.post('/signin', passport.authenticate('jwt', { session: false }));
    }

    context.application.use(passport.initialize());
    context.application.use(configuration.application.routePrefix, router);
};
