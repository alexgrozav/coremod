import { CoremodModuleRuntimeContext, CoremodModuleRuntimeConfiguration, CoremodModuleOptions } from 'coremod';
import { Strategy } from 'passport-local';

export const localStrategy = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    return new Strategy({
        usernameField : 'email',
        passwordField : 'password'
    }, async (email, password, done) => {
        const user: any = await moduleOptions.repository.findOne({ email });

        // Check if user with given email exists
        if (!user) {
            return done(null, false, { message: 'Wrong username or password.' });
        }

        // Validate password and make sure it matches with the corresponding hash stored in the database
        const validPassword = moduleOptions.model.comparePassword(user, password);

        if (!validPassword) {
            return done(null, false, { message : 'Wrong username or password.'});
        }

        // If the passwords match, return the user
        return done(null, user, { message : 'Logged in successfully.'});
    });
};
