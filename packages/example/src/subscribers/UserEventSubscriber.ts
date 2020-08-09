import { EventSubscriber, On } from 'event-dispatch';

import { Logger } from '@coremod/logger';
import { User } from '@app/models/User';
import { events } from '@app/subscribers/events';

const log = new Logger(__filename);

@EventSubscriber()
export class UserEventSubscriber {
    @On(events.user.created)
    public onUserCreate(user: User): void {
        log.info('User ' + user.toString() + ' created!');
    }
}
