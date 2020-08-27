"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
// import { UseAsTitle } from '@coremod/admin';
const class_transformer_1 = require("class-transformer");
let UserRole = class UserRole {
    // @UseAsTitle()
    toString() {
        return `${this.name}`;
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(() => User_1.User, (user) => user.roles),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(type => User_1.User),
    tslib_1.__metadata("design:type", Array)
], UserRole.prototype, "users", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at', type: 'date' }),
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], UserRole.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at', type: 'date' }),
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], UserRole.prototype, "updatedAt", void 0);
UserRole = tslib_1.__decorate([
    typeorm_1.Entity()
], UserRole);
exports.UserRole = UserRole;
//# sourceMappingURL=UserRole.js.map