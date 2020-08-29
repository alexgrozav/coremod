import { EntityRepository, Repository } from 'typeorm';

import { UserProfile } from '@coremod/authentication';

@EntityRepository(UserProfile)
export class UserProfileRepository extends Repository<UserProfile> {}
