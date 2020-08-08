import { Entity } from 'typeorm';
import { UserRole as BaseUserRole } from '@coremod/authentication';

@Entity()
export class UserRole extends BaseUserRole {}
