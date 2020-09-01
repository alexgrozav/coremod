"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const uuid_1 = require("uuid");
const UserProfile_1 = require("@coremod/authentication/dist/models/UserProfile");
typeorm_seeding_1.define(UserProfile_1.UserProfile, (faker, context) => {
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
    const profile = new UserProfile_1.UserProfile();
    profile.id = uuid_1.v4();
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
//# sourceMappingURL=UserProfileFactory.js.map