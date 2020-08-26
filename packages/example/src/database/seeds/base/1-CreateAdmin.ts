import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { v4 as uuid } from 'uuid';

import { User } from '@coremod/authentication/src/models/User';
import { UserRole } from '@coremod/authentication/src/models/UserRole';
import { UserProfile } from '@coremod/authentication/src/models/UserProfile';

export class CreateAdmin implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        const em = connection.createEntityManager();

        const admin = await em.findOne(UserRole, { name: 'admin' });

        const user = new User();
        user.id = uuid();
        user.firstName = 'John';
        user.lastName = 'Doe';
        user.email = 'john@doe.com';
        user.username = 'johndoe';
        user.password = 'password1234';
        user.roles = [admin];
        await em.save(user);

        const profile = new UserProfile();
        profile.id = uuid();
        profile.user = user;
        await em.save(profile);
    }
}
