import { EventSubscriber, On } from 'event-dispatch';

import { Logger } from '@coremod/logger';
import { UserRole } from '../models/UserRole';
import { events } from './events';

const log = new Logger(__filename);

@EventSubscriber()
export class UserRoleEventSubscriber {
    @On(events.user.created)
    public onUserRoleCreate(role: UserRole): void {
        log.info('User role ' + role.toString() + ' created!');
    }
}
