"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const tslib_1 = require("tslib");
const storage_1 = require("class-transformer/storage");
const class_validator_jsonschema_1 = require("class-validator-jsonschema");
const express_basic_auth_1 = tslib_1.__importDefault(require("express-basic-auth"));
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const swaggerUi = tslib_1.__importStar(require("swagger-ui-express"));
const deepmerge_1 = tslib_1.__importDefault(require("deepmerge"));
exports.runtime = (context, configuration, moduleOptions) => {
    const schemas = class_validator_jsonschema_1.validationMetadatasToSchemas({
        classTransformerMetadataStorage: storage_1.defaultMetadataStorage,
        refPointerPrefix: '#/components/schemas/',
    });
    let swaggerFile = routing_controllers_openapi_1.routingControllersToSpec(routing_controllers_1.getMetadataArgsStorage(), {}, {
        components: {
            schemas,
            securitySchemes: {
                basicAuth: {
                    type: 'http',
                    scheme: 'basic',
                },
            },
        },
    });
    // Add context paths and schemas
    swaggerFile = deepmerge_1.default(context.swagger || {}, swaggerFile);
    // Add npm infos to the swagger doc
    swaggerFile.info = {
        title: configuration.application.name,
        description: configuration.application.description,
        version: configuration.application.version,
    };
    swaggerFile.servers = [
        {
            url: `${configuration.application.schema}://${configuration.application.host}:${configuration.application.port}${configuration.application.routePrefix}`,
        },
    ];
    context.application.use(configuration.swagger.specUrl, (req, res) => {
        return res.json(swaggerFile);
    });
    context.application.use(configuration.swagger.route, configuration.swagger.username ? express_basic_auth_1.default({
        users: {
            [`${configuration.swagger.username}`]: configuration.swagger.password,
        },
        challenge: true,
    }) : (req, res, next) => next(), swaggerUi.serve, swaggerUi.setup(swaggerFile));
};
//# sourceMappingURL=runtime.js.map