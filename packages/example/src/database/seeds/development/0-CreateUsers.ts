import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { User } from '@coremod/authentication/dist/models/User';
import { UserProfile } from '@coremod/authentication/dist/models/UserProfile';
import { UserRole } from '@coremod/authentication/dist/models/UserRole';

export class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();
        const userRole = await em.findOne(UserRole, { name: 'user' });
        const users = await factory(User)({ roles: [userRole] })
            .createMany(10);

        for (const user of users) {
            const profile = await factory(UserProfile)({ user }).create();

            await em.save(profile);
        }
    }
}
