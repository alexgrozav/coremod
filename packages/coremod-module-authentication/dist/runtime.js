"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const passport_1 = tslib_1.__importDefault(require("./authentication/passport"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const strategies_1 = require("./authentication/strategies");
exports.runtime = (context, configuration, moduleOptions) => {
    const router = express_1.default.Router();
    if (moduleOptions.strategies.includes('jwt')) {
        passport_1.default.use('signin', strategies_1.localStrategy(context, configuration, moduleOptions));
        passport_1.default.use(strategies_1.jwtStrategy(context, configuration, moduleOptions));
        router.post('/signin', async (req, res, next) => {
            passport_1.default.authenticate('signin', async (err, user, info) => {
                if (err || !user) {
                    const error = new Error('An Error occurred');
                    return next(error);
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) {
                        return next(error);
                    }
                    // We don't want to store the sensitive information such as the
                    // user password in the token so we pick only the email and id
                    const body = {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    };
                    // Sign the JWT token and populate the payload with the user email and id
                    const token = jsonwebtoken_1.default.sign({ user: body }, configuration.authentication.jwt.secretOrKey);
                    // Send back the token to the user
                    return res.json({ token });
                });
            })(req, res, next);
        }, passport_1.default.authenticate('jwt', { session: false }));
    }
    context.application.use(passport_1.default.initialize());
    context.application.use(configuration.application.routePrefix, router);
};
//# sourceMappingURL=runtime.js.map