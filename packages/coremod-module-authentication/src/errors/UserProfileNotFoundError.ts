import { HttpError } from 'routing-controllers';

export class UserProfileNotFoundError extends HttpError {
    constructor() {
        super(404, 'User profile not found!');
    }
}
