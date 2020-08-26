"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleController = exports.CreateUserRoleBody = exports.UserRoleResponse = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const errors_1 = require("@coremod/authentication/dist/errors");
const UserRole_1 = require("@coremod/authentication/src/models/UserRole");
const UserRoleService_1 = require("@coremod/authentication/src/services/UserRoleService");
class BaseUserRoleBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], BaseUserRoleBody.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], BaseUserRoleBody.prototype, "description", void 0);
class UserRoleResponse extends BaseUserRoleBody {
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], UserRoleResponse.prototype, "id", void 0);
exports.UserRoleResponse = UserRoleResponse;
class CreateUserRoleBody extends BaseUserRoleBody {
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], CreateUserRoleBody.prototype, "userId", void 0);
exports.CreateUserRoleBody = CreateUserRoleBody;
let UserRoleController = class UserRoleController {
    constructor(userRoleService) {
        this.userRoleService = userRoleService;
    }
    find() {
        return this.userRoleService.find();
    }
    one(id) {
        return this.userRoleService.findOne(id);
    }
    create(body) {
        const userRole = new UserRole_1.UserRole();
        userRole.name = body.name;
        userRole.description = body.description;
        return this.userRoleService.create(userRole);
    }
    update(id, body) {
        const userRole = new UserRole_1.UserRole();
        userRole.name = body.name;
        userRole.description = body.description;
        return this.userRoleService.update(id, userRole);
    }
    delete(id) {
        return this.userRoleService.delete(id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    routing_controllers_openapi_1.ResponseSchema(UserRoleResponse, { isArray: true }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(errors_1.UserRoleNotFoundError),
    routing_controllers_openapi_1.ResponseSchema(UserRoleResponse),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "one", null);
tslib_1.__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.Post(),
    routing_controllers_openapi_1.ResponseSchema(UserRoleResponse),
    tslib_1.__param(0, routing_controllers_1.Body({ required: true })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateUserRoleBody]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.Put('/:id'),
    routing_controllers_openapi_1.ResponseSchema(UserRoleResponse),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, BaseUserRoleBody]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Authorized(),
    routing_controllers_1.Delete('/:id'),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "delete", null);
UserRoleController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/roles'),
    routing_controllers_openapi_1.OpenAPI({ security: [{ basicAuth: [] }] }),
    tslib_1.__metadata("design:paramtypes", [UserRoleService_1.UserRoleService])
], UserRoleController);
exports.UserRoleController = UserRoleController;
//# sourceMappingURL=UserRoleController.js.map