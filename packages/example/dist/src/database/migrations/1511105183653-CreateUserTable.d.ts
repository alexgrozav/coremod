import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUsersTable1511105183653 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
