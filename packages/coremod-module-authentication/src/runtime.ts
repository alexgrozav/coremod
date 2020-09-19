import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from 'coremod';
import express from 'express';
import passport from './authentication/passport';
import jwt from 'jsonwebtoken';
import { localStrategy, jwtStrategy } from "./authentication/strategies";

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    const router = express.Router();

    if (moduleOptions.strategies.includes('jwt')) {
        passport.use('signin', localStrategy(context, configuration, moduleOptions));
        passport.use(jwtStrategy(context, configuration, moduleOptions));

        router.post('/signin', async (req, res, next) => {
            passport.authenticate('signin', async (err, user, info) => {
                if (err || !user){
                    const error = new Error('An Error occurred');

                    return next(error);
                }

                req.login(user, { session : false }, async (error) => {
                    if (error) {
                        return next(error);
                    }

                    // We don't want to store the sensitive information such as the
                    // user password in the token so we pick only the email and id
                    const body = {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    };

                    // Sign the JWT token and populate the payload with the user email and id
                    const token = jwt.sign({ user: body }, configuration.authentication.jwt.secretOrKey);

                    // Send back the token to the user
                    return res.json({ token });
                });
            })(req, res, next);
        }, passport.authenticate('jwt', { session: false }));

        configureSwagger(context);
    }

    context.application.use(passport.initialize());
    context.application.use(configuration.application.routePrefix, router);
};
