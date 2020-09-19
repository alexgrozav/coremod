import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserProfileToUserRelation1588617479930 implements MigrationInterface {
    private tableName;
    private userColumn;
    private userForeignKey;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
