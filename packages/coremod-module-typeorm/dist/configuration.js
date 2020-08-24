"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const coremod_1 = require("coremod");
exports.configuration = {
    /*
     * Default Connection
     *
     * Connection defines the default connection settings to be used while
     * interacting with SQL databases.
     *
     * npm i --save pg
     * npm i --save-dev sqlite3
     */
    type: coremod_1.env.get('DB_CONNECTION', 'sqlite'),
    host: coremod_1.env.get('DB_HOST', 'localhost'),
    port: coremod_1.env.toNumber(coremod_1.env.get('DB_PORT', '')),
    username: coremod_1.env.get('DB_USER', 'root'),
    password: coremod_1.env.get('DB_PASSWORD', ''),
    database: coremod_1.env.get('DB_DATABASE', 'application'),
    synchronize: coremod_1.env.toBoolean(coremod_1.env.get('DB_SYNCHRONIZE', 'false')),
    logging: coremod_1.env.get('DB_LOGGING', 'error'),
};
//# sourceMappingURL=configuration.js.map