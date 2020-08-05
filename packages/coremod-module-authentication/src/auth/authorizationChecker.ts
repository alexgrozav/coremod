import { Action } from 'routing-controllers';
import * as passport from 'passport';

export function authorizationChecker(action: Action, roles: any[]): Promise<boolean> {
    return passport.authenticate('jwt', (err, user) => {
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
