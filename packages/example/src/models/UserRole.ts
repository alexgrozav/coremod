import {
    IsDate,
    IsOptional,
    IsDefined,
    IsString,
    ValidateNested
} from 'class-validator';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { User } from './User';
// import { UseAsTitle } from '@coremod/admin';
import { Type } from 'class-transformer';

@Entity()
export class UserRole {
    @PrimaryColumn('uuid')
    @IsDefined()
    @IsString()
    public id: string;

    @Column()
    @IsDefined()
    @IsString()
    public name: string;

    @Column()
    @IsOptional()
    @IsString()
    public description: string;

    @ManyToMany(() => User, (user) => user.roles)
    @ValidateNested({ each: true })
    @Type(type => User)
    public users: User[];

    @CreateDateColumn({ name: 'created_at', type: 'date' })
    @IsDate()
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'date' })
    @IsDate()
    public updatedAt: Date;

    // @UseAsTitle()
    public toString(): string {
        return `${this.name}`;
    }
}
