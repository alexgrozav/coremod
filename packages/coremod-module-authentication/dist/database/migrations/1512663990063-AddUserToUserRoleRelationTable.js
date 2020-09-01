"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserToUserRoleRelationTable1512663990063 = void 0;
const typeorm_1 = require("typeorm");
class AddUserToUserRoleRelationTable1512663990063 {
    constructor() {
        this.table = new typeorm_1.Table({
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
        this.userForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_user',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user'
        });
        this.userRoleForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_user_role',
            columnNames: ['user_role_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user_role'
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKeys(this.table.name, [
            this.userForeignKey,
            this.userRoleForeignKey
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
        await queryRunner.dropForeignKeys(this.table.name, [
            this.userForeignKey,
            this.userRoleForeignKey
        ]);
    }
}
exports.AddUserToUserRoleRelationTable1512663990063 = AddUserToUserRoleRelationTable1512663990063;
//# sourceMappingURL=1512663990063-AddUserToUserRoleRelationTable.js.map