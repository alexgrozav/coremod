import { UserRole } from '@app/models/UserRole';
import { UserRoleService } from '@app/services/UserRoleService';
declare class BaseUserRoleBody {
    name: string;
    description: string;
}
export declare class UserRoleResponse extends BaseUserRoleBody {
    id: string;
}
export declare class CreateUserRoleBody extends BaseUserRoleBody {
    userId: string;
}
export declare class UserRoleController {
    private userRoleService;
    constructor(userRoleService: UserRoleService);
    find(): Promise<UserRole[]>;
    one(id: string): Promise<UserRole | undefined>;
    create(body: CreateUserRoleBody): Promise<UserRole>;
    update(id: string, body: BaseUserRoleBody): Promise<UserRole>;
    delete(id: string): Promise<void>;
}
export {};
