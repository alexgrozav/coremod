import { Action } from 'routing-controllers';
export declare function authorizationChecker(repository: any): (action: Action, roles: any[]) => Promise<boolean>;
