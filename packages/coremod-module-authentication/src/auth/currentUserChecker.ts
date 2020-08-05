import { Action } from 'routing-controllers';

export async function currentUserChecker(action: Action): Promise<any> {
    return action.request.user;
}
