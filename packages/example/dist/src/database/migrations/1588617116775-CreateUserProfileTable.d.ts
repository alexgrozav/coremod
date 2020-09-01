import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUserProfileTable1588617116775 implements MigrationInterface {
    private table;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
