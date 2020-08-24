import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserRoleTable1510663524808 implements MigrationInterface {
    private table = new Table({
        name: 'user_role',
        columns: [
            {
                name: 'id',
                type: 'varchar',
                length: '255',
                isPrimary: true,
                isNullable: false
            },
            {
                name: 'name',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: false
            },
            {
                name: 'description',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: true
            },
            {
                name: 'created_at',
                type: 'date',
                isPrimary: false,
                isNullable: false,
                default: 'CURRENT_TIMESTAMP'
            },
            {
                name: 'updated_at',
                type: 'date',
                isPrimary: false,
                isNullable: true,
                default: 'CURRENT_TIMESTAMP'
            }
        ]
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
    }
}
