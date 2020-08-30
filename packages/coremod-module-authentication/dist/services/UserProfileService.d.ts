import { EventDispatcherInterface } from '@coremod/typeorm';
import { LoggerInterface } from '@coremod/logger';
import { UserProfile } from '../models/UserProfile';
import { UserProfileRepository } from '../repositories';
export declare class UserProfileService {
    private UserProfileRepository;
    private eventDispatcher;
    private log;
    constructor(UserProfileRepository: UserProfileRepository, eventDispatcher: EventDispatcherInterface, log: LoggerInterface);
    find(): Promise<UserProfile[]>;
    findOne(id: string): Promise<UserProfile | undefined>;
    create(role: UserProfile): Promise<UserProfile>;
    update(id: string, profile: UserProfile): Promise<UserProfile>;
    delete(id: string): Promise<void>;
}
