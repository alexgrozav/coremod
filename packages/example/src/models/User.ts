import * as bcrypt from 'bcrypt';
import {
    Exclude, Type,
} from 'class-transformer';
import {
    IsDate,
    IsDefined,
    IsString,
    ValidateNested,
} from 'class-validator';
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserRole } from './UserRole';
import { UserProfile } from './UserProfile';
// import { UseAsTitle, UseAsSearchField } from '@coremod/admin';

@Entity()
export class User {
    public static async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    public static async comparePassword(user: User, password: string): Promise<boolean> {
        return await bcrypt.compare(password, user.password);
    }

    @PrimaryColumn('uuid')
    @IsDefined()
    @IsString()
    public id: string;

    @Column({name: 'first_name'})
    @IsDefined()
    @IsString()
    public firstName: string;

    @Column({name: 'last_name'})
    @IsDefined()
    @IsString()
    public lastName: string;

    @Column()
    @IsDefined()
    @IsString()
    public email: string;

    @Column()
    @Exclude()
    @IsDefined()
    @IsString()
    public password: string;

    @Column()
    @IsDefined()
    @IsString()
    // @UseAsSearchField()
    public username: string;

    @ManyToMany(type => UserRole, userRole => userRole.users, { eager: true })
    @JoinTable({
        name: 'user_to_user_role',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_role_id',
            referencedColumnName: 'id'
        }
    })
    @ValidateNested({ each: true })
    @Type(type => UserRole)
    public roles: UserRole[];

    @OneToOne(type => UserProfile, profile => profile.user)
    @ValidateNested()
    @Type(type => UserProfile)
    public profile: UserProfile;

    @CreateDateColumn({ name: 'created_at', type: 'date' })
    @IsDate()
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'date' })
    @IsDate()
    public updatedAt: Date;

    // @UseAsTitle()
    public toString(): string {
        return `${this.username} (${this.email})`;
    }

    @BeforeInsert()
    public async hashPassword(): Promise<void> {
        this.password = await User.hashPassword(this.password);
    }
}
