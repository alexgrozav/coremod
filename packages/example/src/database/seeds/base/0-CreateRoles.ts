import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { v4 as uuid } from 'uuid';

import { UserRole } from '@app/models/UserRole';

export class CreateUserRoles implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const em = connection.createEntityManager();

        const entries = [
            { name: 'admin', description: 'Administrator role' },
            { name: 'owner', description: 'Owner role' },
            { name: 'developer', description: 'Developer role' },
            { name: 'customer', description: 'Customer role' },
            { name: 'user', description: 'User role' }
        ];

        const roles = entries.map((entry) => {
            const role = new UserRole();

            role.id = uuid();
            role.name = entry.name;
            role.description = entry.description;

            return role;
        });

        await em.save(roles);
    }
}
