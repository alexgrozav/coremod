"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sync = void 0;
const helpers_1 = require("coremod/cli/helpers");
async function sync(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'schema:sync'
    ], {});
}
exports.sync = sync;
//# sourceMappingURL=sync.js.map