export declare const env: {
    /**
     * Retrieve environment key with fallback value
     *
     * @param key
     * @param fallback
     */
    get(key: string, fallback?: any): any;
    /**
     * Normalize application port
     *
     * @param port
     */
    normalizePort(port: string): number | string | boolean;
    /**
     * Convert environment variable to boolean
     *
     * @param value
     */
    toBoolean(value: string): boolean;
    /**
     * Convert environment variable to number
     */
    toNumber(value: string): number;
};
