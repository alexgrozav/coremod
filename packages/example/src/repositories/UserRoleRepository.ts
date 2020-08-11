import { EntityRepository, Repository } from 'typeorm';

import { UserRole } from '@app/models/UserRole';

@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {}
