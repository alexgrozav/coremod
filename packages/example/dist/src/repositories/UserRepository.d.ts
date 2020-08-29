import { Repository } from 'typeorm';
import { User } from '../models/User';
export declare class UserRepository extends Repository<User> {
    /**
     * Find by user_id is used for our data-loader to get all needed pets in one query.
     */
    findByUserRoleIds(ids: string[]): Promise<User[]>;
}
