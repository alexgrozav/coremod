"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const authentication_1 = require("@coremod/authentication");
let UserRole = class UserRole extends authentication_1.UserRole {
};
UserRole = tslib_1.__decorate([
    typeorm_1.Entity()
], UserRole);
exports.UserRole = UserRole;
//# sourceMappingURL=UserRole.js.map