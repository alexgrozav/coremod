import { resolve } from 'path';
import { CoremodModuleRuntimeConfiguration, env } from "coremod";

const pkg = require(resolve(process.cwd(), 'package.json'));

export const configuration: CoremodModuleRuntimeConfiguration = {
    application: {
        /**
         * Application Name
         *
         * This value is the name of your application and can used when you
         * need to place the application's name in a email, view or
         * other location.
         */
        name: env.get('APP_NAME', 'Application'),

        /**
         * App Key
         *
         * App key is a randomly generated 16 or 32 characters long string required
         * to encrypt cookies, sessions and other sensitive data.
         */
        key: env.get('APP_KEY', ''),

        /**
         * Application Version
         */
        version: pkg.version,

        /**
         * Application Description
         *
         * This value is the description of your application and can used when you
         * need to provide more details about it.
         */
        description: pkg.description,

        /**
         * Application Host
         *
         * This value represents the host address where the application is running.
         * Use a value of 0.0.0.0 for docker and kubernetes.
         */
        host: env.get('APP_HOST', 'localhost'),

        /**
         * Application Schema
         *
         * This value represents the schema under which the application is served.
         * Can be either `http` or `https`.
         */
        schema: env.get('APP_SCHEMA', 'http'),

        /**
         * Application Route Prefix
         *
         * This value adds an application-wide route prefix such as `/api`.
         */
        routePrefix: env.get('APP_ROUTE_PREFIX', ''),

        /**
         * Application Port
         *
         * This value sets the port under which the application will be served.
         * A default value of 4000 is provided.
         */
        port: env.normalizePort(process.env.PORT || env.get('APP_PORT', '4000')),

        /**
         * Cross Origin Resource Sharing
         *
         * This value sets whether cors is enabled in the application
         */
        cors: true
    },
    paths: {
        migrations: [
            resolve('.', 'src', 'database', 'migrations', '**', '*.ts')
        ],
        entities: [
            resolve('.', 'src', 'models', '**', '*.ts')
        ],
        controllers: [
            resolve('.', 'src', 'controllers', '**', '*Controller.ts')
        ],
        middlewares: [
            resolve('.', 'src', 'middlewares', '**', '*Middleware.ts')
        ],
        interceptors: [
            resolve('.', 'src', 'interceptors', '**', '*Interceptor.ts')
        ],
        subscribers: [
            resolve('.', 'src', 'subscribers', '**', '*Subscriber.ts')
        ],
        resolvers: [
            resolve('.', 'src', 'resolvers', '**', '*Resolver.ts')
        ],
    },
};
