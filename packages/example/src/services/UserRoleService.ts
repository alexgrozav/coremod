import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { v4 as uuid } from 'uuid';

import { EventDispatcher, EventDispatcherInterface } from '@coremod/typeorm';
import { DLogger, LoggerInterface } from '@coremod/logger';
import { UserRole } from '@app/models/UserRole';
import { UserRoleRepository } from '@app/repositories/UserRoleRepository';
import { events } from '@app/subscribers/events';

@Service()
export class UserRoleService {

    constructor(
        @OrmRepository() private userRoleRepository: UserRoleRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @DLogger(__filename) private log: LoggerInterface
    ) {}

    public find(): Promise<UserRole[]> {
        this.log.info('Find all user roles');
        return this.userRoleRepository.find();
    }

    public findOne(id: string): Promise<UserRole | undefined> {
        this.log.info('Find user role');
        return this.userRoleRepository.findOne({ id });
    }

    public async create(role: UserRole): Promise<UserRole> {
        this.log.info('Create a new user role => ', role.toString());
        role.id = uuid();
        const newUserRole = await this.userRoleRepository.save(role);
        this.eventDispatcher.dispatch(events.userRole.created, newUserRole);
        return newUserRole;
    }

    public update(id: string, role: UserRole): Promise<UserRole> {
        this.log.info('Update an user role');
        role.id = id;
        return this.userRoleRepository.save(role);
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete an user role');
        await this.userRoleRepository.delete(id);
        return;
    }

}
