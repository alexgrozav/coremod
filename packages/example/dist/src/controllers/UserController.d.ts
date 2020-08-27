import { User } from '@coremod/authentication/dist/models/User';
import { UserService } from '@coremod/authentication/dist/services/UserService';
import { UserRoleResponse } from '@app/controllers/UserRoleController';
declare class BaseUserBody {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
}
export declare class UserResponse extends BaseUserBody {
    id: string;
    roles: UserRoleResponse[];
}
declare class CreateUserRequest extends BaseUserBody {
    password: string;
}
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    list(): Promise<User[]>;
    me(req: any): Promise<User[]>;
    find(id: string): Promise<User | undefined>;
    create(body: CreateUserRequest): Promise<User>;
    update(id: string, body: BaseUserBody): Promise<User>;
    delete(id: string): Promise<void>;
}
export {};
