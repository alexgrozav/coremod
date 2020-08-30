"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdmin = void 0;
const uuid_1 = require("uuid");
const User_1 = require("@coremod/authentication/dist/models/User");
const UserRole_1 = require("@coremod/authentication/dist/models/UserRole");
const UserProfile_1 = require("@coremod/authentication/dist/models/UserProfile");
class CreateAdmin {
    async run(factory, connection) {
        const em = connection.createEntityManager();
        const admin = await em.findOne(UserRole_1.UserRole, { name: 'admin' });
        const user = new User_1.User();
        user.id = uuid_1.v4();
        user.firstName = 'John';
        user.lastName = 'Doe';
        user.email = 'john@doe.com';
        user.username = 'johndoe';
        user.password = 'password1234';
        user.roles = [admin];
        await em.save(user);
        const profile = new UserProfile_1.UserProfile();
        profile.id = uuid_1.v4();
        profile.user = user;
        await em.save(profile);
    }
}
exports.CreateAdmin = CreateAdmin;
//# sourceMappingURL=1-CreateAdmin.js.map