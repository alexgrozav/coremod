"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@coremod/typeorm");
const baseConfiguration = {
    ...typeorm_1.configuration,
    entities: [
        "node_modules/@coremod/authentication/src/models/**/*",
        "src/models/**/*"
    ],
    migrations: [
        "node_modules/@coremod/authentication/src/database/migrations/**/*",
        "src/database/migrations/**/*"
    ],
    factories: [
        'src/database/factories/**/*'
    ],
    subscribers: [
        "node_modules/@coremod/authentication/src/subscribers/**/*",
        "src/subscribers/**/*"
    ],
    cli: {
        entitiesDir: "src/models",
        migrationsDir: "src/database/migrations",
        subscribersDir: "src/subscribers"
    }
};
module.exports = [
    {
        ...baseConfiguration,
        name: 'default',
        seeds: [
            'src/database/seeds/base/**/*'
        ]
    },
    {
        ...baseConfiguration,
        name: 'development',
        seeds: [
            'src/database/seeds/base/**/*',
            'src/database/seeds/development/**/*'
        ]
    }
];
//# sourceMappingURL=ormconfig.js.map