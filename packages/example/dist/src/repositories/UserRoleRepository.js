"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const UserRole_1 = require("../models/UserRole");
let UserRoleRepository = class UserRoleRepository extends typeorm_1.Repository {
};
UserRoleRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(UserRole_1.UserRole)
], UserRoleRepository);
exports.UserRoleRepository = UserRoleRepository;
//# sourceMappingURL=UserRoleRepository.js.map