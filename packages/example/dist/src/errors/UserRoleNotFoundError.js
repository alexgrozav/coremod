"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleNotFoundError = void 0;
const routing_controllers_1 = require("routing-controllers");
class UserRoleNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'User role not found!');
    }
}
exports.UserRoleNotFoundError = UserRoleNotFoundError;
//# sourceMappingURL=UserRoleNotFoundError.js.map