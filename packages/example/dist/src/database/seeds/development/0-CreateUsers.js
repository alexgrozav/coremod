"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers = void 0;
const User_1 = require("@coremod/authentication/dist/models/User");
const UserProfile_1 = require("@coremod/authentication/dist/models/UserProfile");
const UserRole_1 = require("@coremod/authentication/dist/models/UserRole");
class CreateUsers {
    async run(factory, connection) {
        const em = connection.createEntityManager();
        const userRole = await em.findOne(UserRole_1.UserRole, { name: 'user' });
        const users = await factory(User_1.User)({ roles: [userRole] })
            .createMany(10);
        for (const user of users) {
            const profile = await factory(UserProfile_1.UserProfile)({ user }).create();
            await em.save(profile);
        }
    }
}
exports.CreateUsers = CreateUsers;
//# sourceMappingURL=0-CreateUsers.js.map