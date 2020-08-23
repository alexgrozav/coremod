"use strict";
const baseConfig = {
    entities: [
        "./src/models/**/*"
    ],
    migrations: [
        "src/database/migrations/**/*"
    ],
    factories: [
        'src/database/factories/**/*'
    ],
    subscribers: [
        "src/api/subscribers/**/*"
    ],
    cli: {
        entitiesDir: "src/api/models",
        migrationsDir: "src/database/migrations",
        subscribersDir: "src/api/subscribers"
    }
};
module.exports = [
    {
        ...baseConfig,
        name: 'default',
        seeds: [
            'src/database/seeds/base/**/*'
        ]
    },
    {
        ...baseConfig,
        name: 'development',
        seeds: [
            'src/database/seeds/base/**/*',
            'src/database/seeds/development/**/*'
        ]
    }
];
//# sourceMappingURL=ormconfig.js.map