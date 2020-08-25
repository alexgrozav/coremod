import { HttpError } from 'routing-controllers';

export class UserRoleNotFoundError extends HttpError {
    constructor() {
        super(404, 'User role not found!');
    }
}
