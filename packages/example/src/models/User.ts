import { Entity } from 'typeorm';
import { User as BaseUser } from '@coremod/authentication';

@Entity()
export class User extends BaseUser {}
