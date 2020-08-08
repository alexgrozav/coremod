import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from "coremod/src/types";
import { Application } from 'express';
import { createExpressServer } from 'routing-controllers';
import { authorizationChecker, currentUserChecker } from './auth';
import { useContainer as classValidatorUseContainer } from 'class-validator';
import { useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    // console.log(configuration.application.routePrefix);
    /**
     * We create a new express server instance.
     * We could have also use useExpressServer here to attach controllers to an existing express instance.
     */
    const application: Application = createExpressServer({
        cors: configuration.application.cors,
        classTransformer: true,
        defaultErrorHandler: false,
        routePrefix: configuration.application.routePrefix,

        /**
         * We can add options about how routing-controllers should configure itself.
         * Here we specify what controllers should be registered in our express server.
         */
        controllers: configuration.paths.controllers,
        middlewares: configuration.paths.middlewares,
        interceptors: configuration.paths.interceptors,

        /**
         * Authorization features
         */
        authorizationChecker: configuration.application.authorizationChecker || authorizationChecker,
        currentUserChecker: configuration.application.currentUserChecker || currentUserChecker,
    });

    // Start express server
    const server = application.listen(configuration.application.port, configuration.application.host, () => {
        console.log(`Application running at ${configuration.application.schema}://${configuration.application.host}:${configuration.application.port}!`);
    });

    // Here we can set the data for other loaders
    context.application = application;
    context.server = server;

    routingUseContainer(Container);
    classValidatorUseContainer(Container);
};
