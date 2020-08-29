import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserIndices1512663990033 implements MigrationInterface {
    private tableName;
    private emailIndex;
    private usernameIndex;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
