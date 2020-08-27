import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { v4 as uuid } from 'uuid';

import { EventDispatcher, EventDispatcherInterface } from '@coremod/typeorm';
import { DLogger, LoggerInterface } from '@coremod/logger';
import { UserProfile } from '../models/UserProfile';
import { UserProfileRepository } from '../repositories';
import { events } from '../subscribers';

@Service()
export class UserProfileService {
    constructor(
        @OrmRepository() private userProfileRepository: UserProfileRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @DLogger(__filename) private log: LoggerInterface
    ) {}

    public find(): Promise<UserProfile[]> {
        this.log.info('Find all user profiles');
        return this.userProfileRepository.find();
    }

    public findOne(id: string): Promise<UserProfile | undefined> {
        this.log.info('Find user profile');
        return this.userProfileRepository.findOne({ id });
    }

    public async create(role: UserProfile): Promise<UserProfile> {
        this.log.info('Create a new user profile => ', role.toString());
        role.id = uuid();
        const newUserProfile = await this.userProfileRepository.save(role);
        this.eventDispatcher.dispatch(events.userProfile.created, newUserProfile);
        return newUserProfile;
    }

    public update(id: string, profile: UserProfile): Promise<UserProfile> {
        this.log.info('Update an user profile');
        profile.id = id;
        return this.userProfileRepository.save(profile);
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete an user profile');
        await this.userProfileRepository.delete(id);
        return;
    }

}
