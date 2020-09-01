"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserProfileTable1588617116775 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserProfileTable1588617116775 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'user_profile',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '255',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'bio',
                    type: 'text',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'country',
                    type: 'varchar',
                    length: '64',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'state',
                    type: 'varchar',
                    length: '64',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'city',
                    type: 'varchar',
                    length: '128',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'street',
                    type: 'varchar',
                    length: '256',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'number',
                    type: 'varchar',
                    length: '16',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'address',
                    type: 'varchar',
                    length: '256',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'zip',
                    type: 'varchar',
                    length: '16',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'company_name',
                    type: 'varchar',
                    length: '128',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'company_number',
                    type: 'varchar',
                    length: '32',
                    isPrimary: false,
                    isNullable: true
                },
                {
                    name: 'company_vat',
                    type: 'varchar',
                    length: '32',
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
exports.CreateUserProfileTable1588617116775 = CreateUserProfileTable1588617116775;
//# sourceMappingURL=1588617116775-CreateUserProfileTable.js.map