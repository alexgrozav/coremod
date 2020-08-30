import { UserRole } from '@app/models/UserRole';
import { UserProfile } from '@app/models/UserProfile';
export declare class User {
    static hashPassword(password: string): Promise<string>;
    static comparePassword(user: User, password: string): Promise<boolean>;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
    roles: UserRole[];
    profile: UserProfile;
    createdAt: Date;
    updatedAt: Date;
    toString(): string;
    hashPassword(): Promise<void>;
}
