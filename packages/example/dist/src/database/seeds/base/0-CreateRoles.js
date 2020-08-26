"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRoles = void 0;
const uuid_1 = require("uuid");
const UserRole_1 = require("@coremod/authentication/src/models/UserRole");
class CreateUserRoles {
    async run(factory, connection) {
        const em = connection.createEntityManager();
        const entries = [
            { name: 'admin', description: 'Administrator role' },
            { name: 'owner', description: 'Owner role' },
            { name: 'developer', description: 'Developer role' },
            { name: 'customer', description: 'Customer role' },
            { name: 'user', description: 'User role' }
        ];
        const roles = entries.map((entry) => {
            const role = new UserRole_1.UserRole();
            role.id = uuid_1.v4();
            role.name = entry.name;
            role.description = entry.description;
            return role;
        });
        await em.save(roles);
    }
}
exports.CreateUserRoles = CreateUserRoles;
//# sourceMappingURL=0-CreateRoles.js.map