import { EntityRepository, Repository } from 'typeorm';

import { UserRole } from '../models/UserRole';

@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {}
