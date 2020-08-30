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
    JoinColumn,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn
} from 'typeorm';
import { User } from '@app/models/User';
import { Type } from 'class-transformer';
// import { UseAsTitle } from '@coremod/admin';

@Entity()
export class UserProfile {
    @PrimaryColumn('uuid')
    @IsDefined()
    @IsString()
    public id: string;

    @Column()
    @IsOptional()
    @IsString()
    public bio: string;

    @Column()
    @IsOptional()
    @IsString()
    public country: string;

    @Column()
    @IsOptional()
    @IsString()
    public city: string;

    @Column()
    @IsOptional()
    @IsString()
    public state: string;

    @Column()
    @IsOptional()
    @IsString()
    public street: string;

    @Column()
    @IsOptional()
    @IsString()
    public number: string;

    @Column()
    @IsOptional()
    @IsString()
    public address: string;

    @Column()
    @IsOptional()
    @IsString()
    public zip: string;

    @Column({ name: 'company_name' })
    @IsOptional()
    @IsString()
    public companyName: string;

    @Column({ name: 'company_number' })
    @IsOptional()
    @IsString()
    public companyNumber: string;

    @Column({ name: 'company_vat' })
    @IsOptional()
    @IsString()
    public companyVAT: string;

    @OneToOne(type => User, user => user.profile)
    @JoinColumn({ name: 'user_id' })
    @ValidateNested()
    @Type(type => User)
    public user: User;

    @CreateDateColumn({ name: 'created_at', type: 'date' })
    @IsDate()
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'date' })
    @IsDate()
    public updatedAt: Date;

    // @UseAsTitle()
    public toString(): string {
        return `${this.id}`;
    }
}
