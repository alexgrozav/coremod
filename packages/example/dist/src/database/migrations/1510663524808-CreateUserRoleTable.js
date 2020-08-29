"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRoleTable1510663524808 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserRoleTable1510663524808 {
    constructor() {
        this.table = new typeorm_1.Table({
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
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.CreateUserRoleTable1510663524808 = CreateUserRoleTable1510663524808;
//# sourceMappingURL=1510663524808-CreateUserRoleTable.js.map