export const runtime = () => {
    // console.log(config.application.routePrefix);
    // /**
    //  * We create a new express server instance.
    //  * We could have also use useExpressServer here to attach controllers to an existing express instance.
    //  */
    // const expressApp: Application = createExpressServer({
    //     cors: true,
    //     classTransformer: true,
    //     defaultErrorHandler: false,
    //
    //     routePrefix: config.application.routePrefix,
    //
    //     /**
    //      * We can add options about how routing-controllers should configure itself.
    //      * Here we specify what controllers should be registered in our express server.
    //      */
    //     controllers: config.application.paths.controllers,
    //     middlewares: config.application.paths.middlewares,
    //     interceptors: config.application.paths.interceptors,
    //
    //     /**
    //      * Authorization features
    //      */
    //     authorizationChecker,
    //     currentUserChecker,
    // });
    //
    // // Run application to listen on given port
    // if (!config.isTest) {
    //     const server = expressApp.listen(config.application.port);
    //     settings.setData('express_server', server);
    // }
    //
    // // Here we can set the data for other loaders
    // settings.setData('express_app', expressApp);
}
