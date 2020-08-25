import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { v4 as uuid } from 'uuid';

import { EventDispatcher, EventDispatcherInterface } from '@coremod/typeorm';
import { DLogger, LoggerInterface } from '@coremod/logger';
import { User } from '../models/User';
import { UserRepository } from '../repositories';
import { events } from '../subscribers';

@Service()
export class UserService {
    constructor(
        @OrmRepository() private userRepository: UserRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @DLogger(__filename) private log: LoggerInterface
    ) {}

    public list(): Promise<User[]> {
        this.log.info('Find all users');
        return this.userRepository.find({ relations: ['roles', 'profile'] });
    }

    public find(id: string): Promise<User | undefined> {
        this.log.info('Find one user');
        return this.userRepository.findOne({ id }, { relations: ['roles', 'profile'] });
    }

    public async create(user: User): Promise<User> {
        this.log.info('Create a new user => ', user.toString());
        user.id = uuid();
        const newUser = await this.userRepository.save(user);
        this.eventDispatcher.dispatch(events.user.created, newUser);
        return newUser;
    }

    public update(id: string, user: User): Promise<User> {
        this.log.info('Update a user');
        user.id = id;
        return this.userRepository.save(user);
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete a user');
        await this.userRepository.delete(id);
        return;
    }
}
