"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
exports.jwtStrategy = (context, configuration, moduleOptions) => {
    return new passport_jwt_1.Strategy(configuration.authentication.jwt, async (token, done) => {
        const user = await moduleOptions.repository.findOne(token.user);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
};
//# sourceMappingURL=jwt.js.map