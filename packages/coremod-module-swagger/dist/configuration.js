"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const coremod_1 = require("coremod");
exports.configuration = {
    enabled: coremod_1.env.get('SWAGGER_ENABLED', 'true'),
    route: coremod_1.env.get('SWAGGER_ROUTE', '/swagger'),
    username: coremod_1.env.get('SWAGGER_USERNAME', 'admin'),
    password: coremod_1.env.get('SWAGGER_PASSWORD', '1234'),
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
//# sourceMappingURL=configuration.js.map