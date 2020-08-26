import {IsNotEmpty, IsString, IsUUID} from 'class-validator';
import {
    Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

import { UserRoleNotFoundError } from '@coremod/authentication/dist/errors';
import { UserRole } from '@coremod/authentication/src/models/UserRole';
import { UserRoleService } from '@coremod/authentication/src/services/UserRoleService';

class BaseUserRoleBody {
    @IsNotEmpty()
    public name: string;

    @IsString()
    public description: string;
}

export class UserRoleResponse extends BaseUserRoleBody {
    @IsUUID()
    public id: string;
}

export class CreateUserRoleBody extends BaseUserRoleBody {
    @IsUUID()
    public userId: string;
}

@JsonController('/roles')
@OpenAPI({ security: [{ basicAuth: [] }] })
export class UserRoleController {
    constructor(
        private userRoleService: UserRoleService
    ) { }

    @Get()
    @ResponseSchema(UserRoleResponse, { isArray: true })
    public find(): Promise<UserRole[]> {
        return this.userRoleService.find();
    }

    @Get('/:id')
    @OnUndefined(UserRoleNotFoundError)
    @ResponseSchema(UserRoleResponse)
    public one(@Param('id') id: string): Promise<UserRole | undefined> {
        return this.userRoleService.findOne(id);
    }

    @Authorized()
    @Post()
    @ResponseSchema(UserRoleResponse)
    public create(@Body({ required: true }) body: CreateUserRoleBody): Promise<UserRole> {
        const userRole = new UserRole();

        userRole.name = body.name;
        userRole.description = body.description;

        return this.userRoleService.create(userRole);
    }

    @Authorized()
    @Put('/:id')
    @ResponseSchema(UserRoleResponse)
    public update(@Param('id') id: string, @Body() body: BaseUserRoleBody): Promise<UserRole> {
        const userRole = new UserRole();

        userRole.name = body.name;
        userRole.description = body.description;

        return this.userRoleService.update(id, userRole);
    }

    @Authorized()
    @Delete('/:id')
    public delete(@Param('id') id: string): Promise<void> {
        return this.userRoleService.delete(id);
    }
}
