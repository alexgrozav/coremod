import { EntityRepository, Repository } from 'typeorm';

import { User } from '@app/models/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    /**
     * Find by user_id is used for our data-loader to get all needed pets in one query.
     */
    public findByUserRoleIds(ids: string[]): Promise<User[]> {
        return this.createQueryBuilder()
            .select()
            .where(`user.user_role_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }
}
