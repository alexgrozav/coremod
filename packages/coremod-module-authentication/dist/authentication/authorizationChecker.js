"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationChecker = void 0;
const tslib_1 = require("tslib");
const passport = tslib_1.__importStar(require("passport"));
function authorizationChecker(model) {
    return (action, roles) => {
        return passport.authenticate('jwt', { session: false }, (err, user) => {
            console.log(roles, err, user);
            if (err) {
                return Promise.reject(err);
            }
            if (!user) {
                return Promise.resolve(false);
            }
            action.request.user = user;
            return Promise.resolve(true);
        })(action.request, action.response, action.next);
    };
}
exports.authorizationChecker = authorizationChecker;
//# sourceMappingURL=authorizationChecker.js.map