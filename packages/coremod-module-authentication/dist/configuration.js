"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const coremod_1 = require("coremod");
const passport_jwt_1 = require("passport-jwt");
exports.configuration = {
    /**
     * JWT Configuration
     *
     * This module lets you authenticate endpoints using a JSON web token.
     * It is intended to be used to secure RESTful endpoints without sessions.
     *
     * @docs http://www.passportjs.org/packages/passport-jwt/
     */
    jwt: {
        /**
         * Function that accepts a request as the only parameter and
         * returns either the JWT as a string or null.
         */
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        /**
         * App Key
         *
         * This value is a string or buffer containing the secret (symmetric) or
         * PEM-encoded public key (asymmetric) for verifying the token's signature.
         */
        secretOrKey: coremod_1.env.get(process.env.APP_KEY, ''),
        /**
         * App Key Issuer
         *
         * If defined the token issuer (iss) will be verified against this value.
         */
        issuer: coremod_1.env.get(process.env.APP_KEY_ISSUER, ''),
        /**
         * App Key Audience
         *
         * If defined, the token audience (aud) will be verified against this value.
         */
        audience: coremod_1.env.get(process.env.APP_KEY_AUDIENCE, ''),
    }
};
//# sourceMappingURL=configuration.js.map