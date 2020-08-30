import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUserRoleTable1510663524808 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
