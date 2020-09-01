"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1511105183653 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1511105183653 {
    constructor() {
        this.table = new typeorm_1.Table({
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
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.CreateUsersTable1511105183653 = CreateUsersTable1511105183653;
//# sourceMappingURL=1511105183653-CreateUserTable.js.map