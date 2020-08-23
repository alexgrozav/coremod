import { EventDispatcherInterface } from '@coremod/typeorm';
import { LoggerInterface } from '@coremod/logger';
import { UserRole } from '@app/models/UserRole';
import { UserRoleRepository } from '@app/repositories/UserRoleRepository';
export declare class UserRoleService {
    private userRoleRepository;
    private eventDispatcher;
    private log;
    constructor(userRoleRepository: UserRoleRepository, eventDispatcher: EventDispatcherInterface, log: LoggerInterface);
    find(): Promise<UserRole[]>;
    findOne(id: string): Promise<UserRole | undefined>;
    create(role: UserRole): Promise<UserRole>;
    update(id: string, role: UserRole): Promise<UserRole>;
    delete(id: string): Promise<void>;
}
