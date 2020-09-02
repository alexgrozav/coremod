"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationChecker = void 0;
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("./passport"));
function authorizationChecker(model) {
    return (action, roles) => {
        return passport_1.default.authenticate('jwt', { session: false }, (err, user) => {
            if (err) {
                return Promise.reject(err);
            }
            if (!user) {
                return Promise.resolve(false);
            }
            const hasAdminRole = user.roles.find((role) => role.name === 'admin');
            const hasRequiredRole = user.roles.find((role) => roles.includes(role.name));
            if (user && (roles.length === 0 || hasRequiredRole || hasAdminRole)) {
                action.request.user = user;
                return Promise.resolve(true);
            }
            return Promise.resolve(false);
        })(action.request, action.response, action.next);
    };
}
exports.authorizationChecker = authorizationChecker;
//# sourceMappingURL=authorizationChecker.js.map