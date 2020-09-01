import { CoremodModuleRuntimeContext, CoremodModuleRuntimeConfiguration, CoremodModuleOptions } from 'coremod';
import { Strategy } from 'passport-jwt';
import { getRepository, Repository } from 'typeorm';

export const jwtStrategy = (context: CoremodModuleRuntimeContext, configuration: CoremodModuleRuntimeConfiguration, moduleOptions: CoremodModuleOptions) => {
    return new Strategy(configuration.authentication.jwt,
        async (token, done) => {
            const repository: Repository<typeof moduleOptions.model> = getRepository(moduleOptions.model);
            const user: any = await repository.findOne(token.user);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
};
