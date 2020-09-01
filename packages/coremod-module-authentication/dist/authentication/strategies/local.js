"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStrategy = void 0;
const passport_local_1 = require("passport-local");
const typeorm_1 = require("typeorm");
exports.localStrategy = (context, configuration, moduleOptions) => {
    return new passport_local_1.Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        const repository = typeorm_1.getRepository(moduleOptions.model);
        const user = await repository.findOne({ email });
        // Check if user with given email exists
        if (!user) {
            return done(null, false, { message: 'Wrong username or password.' });
        }
        // Validate password and make sure it matches with the corresponding hash stored in the database
        const validPassword = moduleOptions.model.comparePassword(user, password);
        if (!validPassword) {
            return done(null, false, { message: 'Wrong username or password.' });
        }
        // If the passwords match, return the user
        return done(null, user, { message: 'Logged in successfully.' });
    });
};
//# sourceMappingURL=local.js.map