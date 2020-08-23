"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const uuid_1 = require("uuid");
const User_1 = require("@app/models/User");
typeorm_seeding_1.define(User_1.User, (faker, context) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const email = faker.internet.email(firstName, lastName);
    const username = faker.internet.userName(firstName, lastName);
    const user = new User_1.User();
    user.id = uuid_1.v4();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.username = username;
    user.password = '1234';
    user.roles = context.roles;
    return user;
});
//# sourceMappingURL=UserFactory.js.map