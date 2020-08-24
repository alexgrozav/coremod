"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
const helpers_1 = require("coremod/dist/cli/helpers");
async function status(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:show'
    ], {});
}
exports.status = status;
//# sourceMappingURL=status.js.map