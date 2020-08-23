"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
const path_1 = require("path");
dotenv.config({
    path: path_1.resolve(process.cwd(), `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`)
});
exports.env = {
    /**
     * Retrieve environment key with fallback value
     *
     * @param key
     * @param fallback
     */
    get(key, fallback) {
        if (typeof process.env[key] === 'undefined' && typeof fallback === 'undefined') {
            throw new Error(`Environment variable ${key} is not set.`);
        }
        return process.env[key] || fallback;
    },
    /**
     * Normalize application port
     *
     * @param port
     */
    normalizePort(port) {
        const parsedPort = parseInt(port, 10);
        if (isNaN(parsedPort)) {
            return port;
        }
        if (parsedPort >= 0) {
            return parsedPort;
        }
        return false;
    },
    /**
     * Convert environment variable to boolean
     *
     * @param value
     */
    toBoolean(value) {
        return value === 'true';
    },
    /**
     * Convert environment variable to number
     */
    toNumber(value) {
        return parseInt(value, 10);
    }
};
//# sourceMappingURL=env.js.map