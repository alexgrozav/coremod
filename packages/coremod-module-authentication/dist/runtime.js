"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
exports.runtime = (context, configuration, moduleOptions) => {
    if (moduleOptions.strategy === 'jwt') {
        passport_1.default.use(new passport_jwt_1.Strategy(configuration.authentication.jwt, async (jwtPayload, done) => {
            const user = await moduleOptions.repository.findOne(jwtPayload.sub);
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        }));
    }
    context.application.use(passport_1.default.initialize());
};
//# sourceMappingURL=runtime.js.map