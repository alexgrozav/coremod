import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateExampleTable1588938098896 implements MigrationInterface {
    private table = new Table({
        name: 'example',
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
                length: '256',
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
