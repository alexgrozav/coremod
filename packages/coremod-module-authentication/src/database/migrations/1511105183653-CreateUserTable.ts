import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1511105183653 implements MigrationInterface {
    private table = new Table({
        name: 'user',
        columns: [
            {
                name: 'id',
                type: 'varchar',
                length: '255',
                isPrimary: true,
                isNullable: false
            },
            {
                name: 'first_name',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: false
            },
            {
                name: 'last_name',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: false
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: false
            },
            {
                name: 'username',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: false
            },
            {
                name: 'password',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: false
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
