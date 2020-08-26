"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const typedi_1 = require("typedi");
const glob_1 = require("glob");
exports.runtime = async (context, configuration, moduleOptions) => {
    typeorm_2.useContainer(typedi_1.Container);
    const loadedConnectionOptions = await typeorm_1.getConnectionOptions();
    const connectionOptions = Object.assign(loadedConnectionOptions, {
        type: configuration.database.type,
        host: configuration.database.host,
        port: configuration.database.port,
        username: configuration.database.username,
        password: configuration.database.password,
        database: configuration.database.database,
        synchronize: configuration.database.synchronize,
        logging: configuration.database.logging,
        entities: configuration.paths.entities,
        migrations: configuration.paths.migrations,
    });
    const connection = await typeorm_1.createConnection(connectionOptions);
    context.connection = connection;
    context.onExit(() => connection.close());
    const patterns = configuration.paths.subscribers;
    patterns.forEach((pattern) => {
        const files = glob_1.sync(pattern);
        for (const file of files) {
            Promise.resolve().then(() => __importStar(require(file)));
        }
    });
};
//# sourceMappingURL=runtime.js.map