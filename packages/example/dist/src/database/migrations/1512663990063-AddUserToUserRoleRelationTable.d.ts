import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserToUserRoleRelationTable1512663990063 implements MigrationInterface {
    private table;
    private userForeignKey;
    private userRoleForeignKey;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
