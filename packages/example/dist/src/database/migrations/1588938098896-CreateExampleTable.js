"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExampleTable1588938098896 = void 0;
const typeorm_1 = require("typeorm");
class CreateExampleTable1588938098896 {
    constructor() {
        this.table = new typeorm_1.Table({
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
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.CreateExampleTable1588938098896 = CreateExampleTable1588938098896;
//# sourceMappingURL=1588938098896-CreateExampleTable.js.map