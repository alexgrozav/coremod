import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class AddUserIndices1512663990033 implements MigrationInterface {
    private tableName = 'user';

    private emailIndex = new TableIndex({
        name: 'idx_email',
        columnNames: ['email']
    });

    private usernameIndex = new TableIndex({
        name: 'idx_username',
        columnNames: ['username']
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createIndices(this.tableName, [
            this.emailIndex,
            this.usernameIndex
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropIndices(this.tableName, [
            this.emailIndex,
            this.usernameIndex
        ]);
    }
}
