import { Action } from 'routing-controllers';
export declare function authorizationChecker(model: any): (action: Action, roles: any[]) => Promise<boolean>;
