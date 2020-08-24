"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const path_1 = require("path");
const coremod_1 = require("coremod");
const pkg = require(path_1.resolve(process.cwd(), 'package.json'));
exports.configuration = {
    application: {
        /**
         * Application Name
         *
         * This value is the name of your application and can used when you
         * need to place the application's name in a email, view or
         * other location.
         */
        name: coremod_1.env.get('APP_NAME', 'Application'),
        /**
         * App Key
         *
         * App key is a randomly generated 16 or 32 characters long string required
         * to encrypt cookies, sessions and other sensitive data.
         */
        key: coremod_1.env.get('APP_KEY', ''),
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
        host: coremod_1.env.get('APP_HOST', 'localhost'),
        /**
         * Application Schema
         *
         * This value represents the schema under which the application is served.
         * Can be either `http` or `https`.
         */
        schema: coremod_1.env.get('APP_SCHEMA', 'http'),
        /**
         * Application Route Prefix
         *
         * This value adds an application-wide route prefix such as `/api`.
         */
        routePrefix: coremod_1.env.get('APP_ROUTE_PREFIX', ''),
        /**
         * Application Port
         *
         * This value sets the port under which the application will be served.
         * A default value of 4000 is provided.
         */
        port: coremod_1.env.normalizePort(process.env.PORT || coremod_1.env.get('APP_PORT', '4000')),
        /**
         * Cross Origin Resource Sharing
         *
         * This value sets whether cors is enabled in the application
         */
        cors: true
    },
    paths: {
        migrations: [
            path_1.resolve('.', 'src', 'database', 'migrations', '**', '*.ts')
        ],
        entities: [
            path_1.resolve('.', 'src', 'models', '**', '*.ts')
        ],
        controllers: [
            path_1.resolve('.', 'src', 'controllers', '**', '*Controller.ts')
        ],
        middlewares: [
            path_1.resolve('.', 'src', 'middlewares', '**', '*Middleware.ts')
        ],
        interceptors: [
            path_1.resolve('.', 'src', 'interceptors', '**', '*Interceptor.ts')
        ],
        subscribers: [
            path_1.resolve('.', 'src', 'subscribers', '**', '*Subscriber.ts')
        ],
        resolvers: [
            path_1.resolve('.', 'src', 'resolvers', '**', '*Resolver.ts')
        ],
    },
};
//# sourceMappingURL=configuration.js.map