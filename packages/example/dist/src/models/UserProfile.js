"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const class_transformer_1 = require("class-transformer");
// import { UseAsTitle } from '@coremod/admin';
let UserProfile = class UserProfile {
    // @UseAsTitle()
    toString() {
        return `${this.id}`;
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "bio", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "country", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "city", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "state", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "street", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "number", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "address", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "zip", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'company_name' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "companyName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'company_number' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "companyNumber", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'company_vat' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserProfile.prototype, "companyVAT", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(type => User_1.User, user => user.profile),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(type => User_1.User),
    tslib_1.__metadata("design:type", User_1.User)
], UserProfile.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at', type: 'date' }),
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], UserProfile.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at', type: 'date' }),
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], UserProfile.prototype, "updatedAt", void 0);
UserProfile = tslib_1.__decorate([
    typeorm_1.Entity()
], UserProfile);
exports.UserProfile = UserProfile;
//# sourceMappingURL=UserProfile.js.map