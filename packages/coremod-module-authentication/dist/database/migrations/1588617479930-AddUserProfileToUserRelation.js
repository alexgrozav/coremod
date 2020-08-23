"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserProfileToUserRelation1588617479930 = void 0;
const typeorm_1 = require("typeorm");
class AddUserProfileToUserRelation1588617479930 {
    constructor() {
        this.tableName = 'user_profile';
        this.userColumn = new typeorm_1.TableColumn({
            name: 'user_id',
            type: 'varchar',
            length: '255',
            isPrimary: false,
            isNullable: false
        });
        this.userForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_user',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE'
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.userColumn);
        await queryRunner.createForeignKey(this.tableName, this.userForeignKey);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.userColumn);
        await queryRunner.dropForeignKey(this.tableName, this.userForeignKey);
    }
}
exports.AddUserProfileToUserRelation1588617479930 = AddUserProfileToUserRelation1588617479930;
//# sourceMappingURL=1588617479930-AddUserProfileToUserRelation.js.map