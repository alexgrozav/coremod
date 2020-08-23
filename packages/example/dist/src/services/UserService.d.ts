import { EventDispatcherInterface } from '@coremod/typeorm';
import { LoggerInterface } from '@coremod/logger';
import { User } from '@app/models/User';
import { UserRepository } from '@app/repositories/UserRepository';
export declare class UserService {
    private userRepository;
    private eventDispatcher;
    private log;
    constructor(userRepository: UserRepository, eventDispatcher: EventDispatcherInterface, log: LoggerInterface);
    list(): Promise<User[]>;
    find(id: string): Promise<User | undefined>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    delete(id: string): Promise<void>;
}
