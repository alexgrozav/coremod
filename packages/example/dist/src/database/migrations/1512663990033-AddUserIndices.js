"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserIndices1512663990033 = void 0;
const typeorm_1 = require("typeorm");
class AddUserIndices1512663990033 {
    constructor() {
        this.tableName = 'user';
        this.emailIndex = new typeorm_1.TableIndex({
            name: 'idx_email',
            columnNames: ['email']
        });
        this.usernameIndex = new typeorm_1.TableIndex({
            name: 'idx_username',
            columnNames: ['username']
        });
    }
    async up(queryRunner) {
        await queryRunner.createIndices(this.tableName, [
            this.emailIndex,
            this.usernameIndex
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropIndices(this.tableName, [
            this.emailIndex,
            this.usernameIndex
        ]);
    }
}
exports.AddUserIndices1512663990033 = AddUserIndices1512663990033;
//# sourceMappingURL=1512663990033-AddUserIndices.js.map