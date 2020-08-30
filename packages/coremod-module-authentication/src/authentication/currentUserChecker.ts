import { Action } from 'routing-controllers';

export async function currentUserChecker(model) {
    return (action: Action): Promise<any> => {
        return action.request.user;
    };
}
