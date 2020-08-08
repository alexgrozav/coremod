import { CoremodModuleRuntimeConfiguration, env } from "coremod";

export const configuration: CoremodModuleRuntimeConfiguration = {
    /*
     * Default Connection
     *
     * Connection defines the default connection settings to be used while
     * interacting with SQL databases.
     *
     * npm i --save pg
     * npm i --save-dev sqlite3
     */
    type: env.get('DB_CONNECTION', 'sqlite'),
    host: env.get('DB_HOST', 'localhost'),
    port: env.toNumber(env.get('DB_PORT', '')),
    username: env.get('DB_USER', 'root'),
    password: env.get('DB_PASSWORD', ''),
    database: env.get('DB_DATABASE', 'application'),
    synchronize: env.toBoolean(env.get('DB_SYNCHRONIZE', 'false')),
    logging: env.get('DB_LOGGING', 'error'),
};
