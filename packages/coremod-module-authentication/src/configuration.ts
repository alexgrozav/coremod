import { CoremodModuleRuntimeConfiguration, env } from 'coremod';
import { ExtractJwt, StrategyOptions as JwtStrategyOptions } from 'passport-jwt';

export const configuration: CoremodModuleRuntimeConfiguration = {
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
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

        /**
         * App Key
         *
         * This value is a string or buffer containing the secret (symmetric) or
         * PEM-encoded public key (asymmetric) for verifying the token's signature.
         */
        secretOrKey: env.get(process.env.APP_KEY, ''),

        /**
         * App Key Issuer
         *
         * If defined the token issuer (iss) will be verified against this value.
         */
        issuer: env.get(process.env.APP_KEY_ISSUER, ''),

        /**
         * App Key Audience
         *
         * If defined, the token audience (aud) will be verified against this value.
         */
        audience: env.get(process.env.APP_KEY_AUDIENCE, ''),
    } as JwtStrategyOptions
};
