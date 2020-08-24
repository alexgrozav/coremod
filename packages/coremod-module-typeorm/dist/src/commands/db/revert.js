"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revert = void 0;
const helpers_1 = require("coremod/dist/cli/helpers");
async function revert(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:revert'
    ], {});
}
exports.revert = revert;
//# sourceMappingURL=revert.js.map