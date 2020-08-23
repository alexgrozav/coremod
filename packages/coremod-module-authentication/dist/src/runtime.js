"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const typeorm_1 = require("typeorm");
const User_1 = require("./models/User");
exports.runtime = (context, configuration, moduleOptions) => {
    if (moduleOptions.strategy === 'jwt') {
        passport_1.default.use(new passport_jwt_1.Strategy(configuration.authentication.jwt, async (jwtPayload, done) => {
            const userRepository = typeorm_1.getRepository(User_1.User);
            const user = await userRepository.findOne(jwtPayload.sub);
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