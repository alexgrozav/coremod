"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const helpers_1 = require("coremod/dist/cli/helpers");
async function query(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        '--ignore', '"node_modules/(?!@?coremod)"',
        'node_modules/typeorm/cli.js',
        'query'
    ], {});
}
exports.query = query;
//# sourceMappingURL=query.js.map