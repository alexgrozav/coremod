import { User } from './User';
export declare class UserProfile {
    id: string;
    bio: string;
    country: string;
    city: string;
    state: string;
    street: string;
    number: string;
    address: string;
    zip: string;
    companyName: string;
    companyNumber: string;
    companyVAT: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    toString(): string;
}
