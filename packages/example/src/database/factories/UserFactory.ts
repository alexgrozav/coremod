import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { v4 as uuid } from 'uuid';

import { User } from '@coremod/authentication/dist/models/User';

define(User, (faker: typeof Faker, context: { roles: [] }) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    const username = faker.internet.userName(firstName, lastName);

    const user = new User();
    user.id = uuid();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.username = username;
    user.password = '1234';
    user.roles = context.roles;
    return user;
});
