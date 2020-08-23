"use strict";
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const bcrypt = tslib_1.__importStar(require("bcrypt"));
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const UserRole_1 = require("./UserRole");
const UserProfile_1 = require("./UserProfile");
// import { UseAsTitle, UseAsSearchField } from '@coremod/admin';
let User = User_1 = class User {
    static async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }
    static async comparePassword(user, password) {
        return await bcrypt.compare(password, user.password);
    }
    // @UseAsTitle()
    toString() {
        return `${this.username} (${this.email})`;
    }
    async hashPassword() {
        this.password = await User_1.hashPassword(this.password);
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryColumn('uuid'),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'first_name' }),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'last_name' }),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    class_validator_1.IsDefined(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => UserRole_1.UserRole, userRole => userRole.users, { eager: true }),
    typeorm_1.JoinTable({
        name: 'user_to_user_role',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_role_id',
            referencedColumnName: 'id'
        }
    }),
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(type => UserRole_1.UserRole),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "roles", void 0);
tslib_1.__decorate([
    typeorm_1.OneToOne(type => UserProfile_1.UserProfile, profile => profile.user),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(type => UserProfile_1.UserProfile),
    tslib_1.__metadata("design:type", UserProfile_1.UserProfile)
], User.prototype, "profile", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at', type: 'date' }),
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at', type: 'date' }),
    class_validator_1.IsDate(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = User_1 = tslib_1.__decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map