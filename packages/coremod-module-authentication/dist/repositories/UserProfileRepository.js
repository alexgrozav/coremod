"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const UserProfile_1 = require("../models/UserProfile");
let UserProfileRepository = class UserProfileRepository extends typeorm_1.Repository {
};
UserProfileRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(UserProfile_1.UserProfile)
], UserProfileRepository);
exports.UserProfileRepository = UserProfileRepository;
//# sourceMappingURL=UserProfileRepository.js.map