"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drop = void 0;
const helpers_1 = require("coremod/cli/helpers");
async function drop(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'schema:drop'
    ], {});
}
exports.drop = drop;
//# sourceMappingURL=drop.js.map