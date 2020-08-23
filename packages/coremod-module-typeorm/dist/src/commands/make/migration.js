"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration = void 0;
const helpers_1 = require("coremod/cli/helpers");
async function migration(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:create',
        '-n', argv.name
    ], {});
}
exports.migration = migration;
//# sourceMappingURL=migration.js.map