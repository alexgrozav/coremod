import { configuration } from '@coremod/typeorm';

const baseConfiguration = {
    ...configuration,
    entities: [
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
