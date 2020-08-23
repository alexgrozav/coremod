"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const authentication_1 = require("@coremod/authentication");
let UserProfile = class UserProfile extends authentication_1.UserProfile {
};
UserProfile = tslib_1.__decorate([
    typeorm_1.Entity()
], UserProfile);
exports.UserProfile = UserProfile;
//# sourceMappingURL=UserProfile.js.map