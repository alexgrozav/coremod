import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import {
    Authorized, Body, Delete, Get, JsonController, OnUndefined, Param, Post, Put, Req
} from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';

import { UserNotFoundError } from '@coremod/authentication/dist/errors';
import { User } from '@coremod/authentication/dist/models/User';
import { UserService } from '@coremod/authentication/dist/services/UserService';
import { UserRoleResponse } from '@app/controllers/UserRoleController';

class BaseUserBody {
    @IsNotEmpty()
    public firstName: string;

    @IsNotEmpty()
    public lastName: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsNotEmpty()
    public username: string;
}

export class UserResponse extends BaseUserBody {
    @IsUUID()
    public id: string;

    @ValidateNested({ each: true })
    @Type(() => UserRoleResponse)
    public roles: UserRoleResponse[];
}

class CreateUserRequest extends BaseUserBody {
    @IsNotEmpty()
    public password: string;
}

@JsonController('/users')
@OpenAPI({ security: [{ basicAuth: [] }] })
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    @ResponseSchema(UserResponse, { isArray: true })
    public list(): Promise<User[]> {
        return this.userService.list();
    }

    @Get('/me')
    @ResponseSchema(UserResponse)
    public me(@Req() req: any): Promise<User[]> {
        return req.user;
    }

    @Get('/:id')
    @OnUndefined(UserNotFoundError)
    @ResponseSchema(UserResponse)
    public find(@Param('id') id: string): Promise<User | undefined> {
        return this.userService.find(id);
    }

    @Post()
    @ResponseSchema(UserResponse)
    public create(@Body() body: CreateUserRequest): Promise<User> {
        const user = new User();

        user.email = body.email;
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.password = body.password;
        user.username = body.username;

        return this.userService.create(user);
    }

    @Put('/:id')
    @Authorized()
    @ResponseSchema(UserResponse)
    public update(@Param('id') id: string, @Body() body: BaseUserBody): Promise<User> {
        const user = new User();
        user.email = body.email;
        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.username = body.username;

        return this.userService.update(id, user);
    }

    @Delete('/:id')
    @Authorized()
    public delete(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }
}
