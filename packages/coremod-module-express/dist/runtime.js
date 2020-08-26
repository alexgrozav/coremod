"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const routing_controllers_1 = require("routing-controllers");
const auth_1 = require("./auth");
const class_validator_1 = require("class-validator");
const routing_controllers_2 = require("routing-controllers");
const typedi_1 = require("typedi");
exports.runtime = (context, configuration, moduleOptions) => {
    // console.log(configuration.application.routePrefix);
    /**
     * We create a new express server instance.
     * We could have also use useExpressServer here to attach controllers to an existing express instance.
     */
    const application = routing_controllers_1.createExpressServer({
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
        authorizationChecker: configuration.application.authorizationChecker || auth_1.authorizationChecker,
        currentUserChecker: configuration.application.currentUserChecker || auth_1.currentUserChecker,
    });
    if (moduleOptions.heartbeat) {
        application.get(configuration.application.routePrefix, (req, res) => {
            return res.status(200).json({
                name: configuration.application.name,
                version: configuration.application.version,
                description: configuration.application.description,
            });
        });
    }
    // Start express server
    const server = application.listen(configuration.application.port, configuration.application.host, () => {
        console.log(`Application running at ${configuration.application.schema}://${configuration.application.host}:${configuration.application.port}!`);
    });
    // Here we can set the data for other loaders
    context.application = application;
    context.server = server;
    routing_controllers_2.useContainer(typedi_1.Container);
    class_validator_1.useContainer(typedi_1.Container);
};
//# sourceMappingURL=runtime.js.map