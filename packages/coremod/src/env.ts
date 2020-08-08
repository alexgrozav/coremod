import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({
    path: resolve(process.cwd(), `.env${ process.env.NODE_ENV === 'test' ? '.test' : '' }`)
});

export const env = {
    /**
     * Retrieve environment key with fallback value
     *
     * @param key
     * @param fallback
     */
    get(key: string, fallback?: any): any {
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
    normalizePort(port: string): number | string | boolean {
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
    toBoolean(value: string): boolean {
        return value === 'true';
    },

    /**
     * Convert environment variable to number
     */
    toNumber(value: string): number {
        return parseInt(value, 10);
    }
};
