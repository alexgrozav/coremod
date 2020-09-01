"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileNotFoundError = void 0;
const routing_controllers_1 = require("routing-controllers");
class UserProfileNotFoundError extends routing_controllers_1.HttpError {
    constructor() {
        super(404, 'User profile not found!');
    }
}
exports.UserProfileNotFoundError = UserProfileNotFoundError;
//# sourceMappingURL=UserProfileNotFoundError.js.map