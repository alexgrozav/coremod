import { Action } from 'routing-controllers';
import * as passport from 'passport';

export function authorizationChecker(model) {
    return (action: Action, roles: any[]): Promise<boolean> => {
        return passport.authenticate('jwt', { session: false }, (err, user) => {
            console.log(roles, err, user);

            if (err) {
                return Promise.reject(err);
            }

            if (!user) {
                return Promise.resolve(false);
            }

            action.request.user = user;

            return Promise.resolve(true);
        })(action.request, action.response, action.next);
    }
}
