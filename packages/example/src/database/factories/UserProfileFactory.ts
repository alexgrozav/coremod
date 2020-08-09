import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { v4 as uuid } from 'uuid';

import { User } from '@app/models/User';
import { UserProfile } from '@app/models/UserProfile';

define(UserProfile, (faker: typeof Faker, context: { user: User }) => {
    const bio = faker.random.words(100);
    const country = faker.address.countryCode();
    const state = faker.address.state();
    const city = faker.address.city();
    const street = faker.address.streetName();
    const number = faker.random.number(100).toString();
    const address = faker.address.secondaryAddress();
    const zip = faker.address.zipCode();
    const companyName = faker.company.companyName();
    const companyNumber = faker.finance.account(16);
    const companyVAT = faker.finance.account(16);

    const profile = new UserProfile();
    profile.id = uuid();
    profile.bio = bio;
    profile.country = country;
    profile.state = state;
    profile.city = city;
    profile.street = street;
    profile.number = number;
    profile.address = address;
    profile.zip = zip;
    profile.companyName = companyName;
    profile.companyNumber = companyNumber;
    profile.companyVAT = companyVAT;
    profile.user = context.user;
    return profile;
});
