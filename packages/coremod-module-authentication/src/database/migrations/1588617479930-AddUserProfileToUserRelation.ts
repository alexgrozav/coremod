import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddUserProfileToUserRelation1588617479930 implements MigrationInterface {
    private tableName = 'user_profile';

    private userColumn = new TableColumn({
        name: 'user_id',
        type: 'varchar',
        length: '255',
        isPrimary: false,
        isNullable: false
    });

    private userForeignKey = new TableForeignKey({
        name: 'fk_user',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE'
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn(this.tableName, this.userColumn);
        await queryRunner.createForeignKey(this.tableName, this.userForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn(this.tableName, this.userColumn);
        await queryRunner.dropForeignKey(this.tableName, this.userForeignKey);
    }
}
