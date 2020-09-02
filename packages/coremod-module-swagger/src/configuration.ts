import { CoremodModuleRuntimeConfiguration, env } from "coremod";

export const configuration: CoremodModuleRuntimeConfiguration = {
    enabled: env.get('SWAGGER_ENABLED', 'true'),
    route: env.get('SWAGGER_ROUTE', '/swagger'),
    username: env.get('SWAGGER_USERNAME', 'admin'),
    password: env.get('SWAGGER_PASSWORD', '1234'),
    specUrl: '/swagger.json',
    options: {
        swaggerDefinition: {
            info: {
                title: 'Application',
                description: 'Download and install the best Vue.js UI Kits, Themes, Templates and Plugins. Keep them up to date using npm. Simple.',
                version: '1.0.0'
            },
            basePath: '/api/'
        },

        // Path to the API docs
        apis: [
            'app/**/*.js'
        ]
    }
};
