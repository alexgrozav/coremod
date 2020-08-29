import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class AddUserToUserRoleRelationTable1512663990063 implements MigrationInterface {
    private table = new Table({
        name: 'user_to_user_role',
        columns: [
            {
                name: 'user_id',
                type: 'varchar',
                length: '255',
                isPrimary: true,
                isNullable: false
            },
            {
                name: 'user_role_id',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: false
            }
        ]
    });

    private userForeignKey = new TableForeignKey({
        name: 'fk_user',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user'
    });

    private userRoleForeignKey = new TableForeignKey({
        name: 'fk_user_role',
        columnNames: ['user_role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_role'
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKeys(this.table.name, [
            this.userForeignKey,
            this.userRoleForeignKey
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKeys(this.table.name, [
            this.userForeignKey,
            this.userRoleForeignKey
        ]);
    }
}
