import { User } from './User';
export declare class UserRole {
    id: string;
    name: string;
    description: string;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
    toString(): string;
}
