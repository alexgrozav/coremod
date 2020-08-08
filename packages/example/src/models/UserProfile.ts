import { Entity } from 'typeorm';
import { UserProfile as BaseUserProfile } from '@coremod/authentication';

@Entity()
export class UserProfile extends BaseUserProfile {}
