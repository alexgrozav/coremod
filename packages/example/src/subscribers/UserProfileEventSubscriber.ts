import { EventSubscriber, On } from 'event-dispatch';

import { Logger } from '@coremod/logger';
import { UserProfile } from '../models/UserProfile';
import { events } from './events';

const log = new Logger(__filename);

@EventSubscriber()
export class UserProfileEventSubscriber {
    @On(events.user.created)
    public onUserProfileCreate(profile: UserProfile): void {
        log.info('User profile ' + profile.toString() + ' created!');
    }
}
