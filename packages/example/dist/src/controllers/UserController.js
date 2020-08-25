"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.UserResponse = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_openapi_1 = require("routing-controllers-openapi");
const errors_1 = require("@coremod/authentication/dist/errors");
const User_1 = require("@coremod/authentication/dist/models/User");
const UserService_1 = require("@coremod/authentication/dist/services/UserService");
const UserRoleController_1 = require("@app/controllers/UserRoleController");
class BaseUserBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], BaseUserBody.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], BaseUserBody.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], BaseUserBody.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], BaseUserBody.prototype, "username", void 0);
class UserResponse extends BaseUserBody {
}
tslib_1.__decorate([
    class_validator_1.IsUUID(),
    tslib_1.__metadata("design:type", String)
], UserResponse.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => UserRoleController_1.UserRoleResponse),
    tslib_1.__metadata("design:type", Array)
], UserResponse.prototype, "roles", void 0);
exports.UserResponse = UserResponse;
class CreateUserRequest extends BaseUserBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateUserRequest.prototype, "password", void 0);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    list() {
        return this.userService.list();
    }
    me(req) {
        return req.user;
    }
    find(id) {
        return this.userService.find(id);
    }
    create(body) {
        const user = new User_1.User();
        user.email = body.email;
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.password = body.password;
        user.username = body.username;
        return this.userService.create(user);
    }
    update(id, body) {
        const user = new User_1.User();
        user.email = body.email;
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.username = body.username;
        return this.userService.update(id, user);
    }
    delete(id) {
        return this.userService.delete(id);
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get(),
    routing_controllers_openapi_1.ResponseSchema(UserResponse, { isArray: true }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "list", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/me'),
    routing_controllers_openapi_1.ResponseSchema(UserResponse),
    tslib_1.__param(0, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "me", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/:id'),
    routing_controllers_1.OnUndefined(errors_1.UserNotFoundError),
    routing_controllers_openapi_1.ResponseSchema(UserResponse),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
tslib_1.__decorate([
    routing_controllers_1.Post(),
    routing_controllers_openapi_1.ResponseSchema(UserResponse),
    tslib_1.__param(0, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateUserRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/:id'),
    routing_controllers_1.Authorized(),
    routing_controllers_openapi_1.ResponseSchema(UserResponse),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, BaseUserBody]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/users'),
    routing_controllers_openapi_1.OpenAPI({ security: [{ basicAuth: [] }] }),
    tslib_1.__metadata("design:paramtypes", [UserService_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map