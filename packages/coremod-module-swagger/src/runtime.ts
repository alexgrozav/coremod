import {
    CoremodModuleRuntime,
    CoremodModuleOptions,
    CoremodModuleRuntimeConfiguration,
    CoremodModuleRuntimeContext
} from "coremod";
import { defaultMetadataStorage as classTransformerMetadataStorage } from 'class-transformer/storage';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import basicAuth from 'express-basic-auth';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import * as swaggerUi from 'swagger-ui-express';

export const runtime: CoremodModuleRuntime = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    const schemas = validationMetadatasToSchemas({
        classTransformerMetadataStorage,
        refPointerPrefix: '#/components/schemas/',
    } as any);

    const swaggerFile = routingControllersToSpec(getMetadataArgsStorage(), {}, {
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

    context.application.use(
        configuration.swagger.route,
        configuration.swagger.username ? basicAuth({
            users: {
                [`${configuration.swagger.username}`]: configuration.swagger.password,
            },
            challenge: true,
        }) : (req, res, next) => next(),
        swaggerUi.serve,
        swaggerUi.setup(swaggerFile)
    );
};
