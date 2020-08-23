"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = void 0;
const helpers_1 = require("coremod/cli/helpers");
async function migrate(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:run'
    ], {});
}
exports.migrate = migrate;
//# sourceMappingURL=migrate.js.map