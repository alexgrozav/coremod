import { Action } from 'routing-controllers';
import passport from './passport';

export function authorizationChecker(model) {
    return (action: Action, roles: any[]): Promise<boolean> => {
        return passport.authenticate('jwt', { session: false }, (err, user) => {
            if (err) {
                return Promise.reject(err);
            }

            if (!user) {
                return Promise.resolve(false);
            }

            const hasAdminRole: boolean = user.roles.find((role) => role.name === 'admin');
            const hasRequiredRole: boolean = user.roles.find((role) => roles.includes(role.name));

            if (user && (roles.length === 0 || hasRequiredRole || hasAdminRole)) {
                action.request.user = user;

                return Promise.resolve(true);
            }

            return Promise.resolve(false);
        })(action.request, action.response, action.next);
    }
}
