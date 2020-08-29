import { Action } from 'routing-controllers';

export async function currentUserChecker(repository) {
    return (action: Action): Promise<any> => {
        return action.request.user;
    };
}
