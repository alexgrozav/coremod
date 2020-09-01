"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const helpers_1 = require("coremod/dist/cli/helpers");
async function seed(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        '--ignore', '"node_modules/(?!@?coremod)"',
        'node_modules/typeorm-seeding/dist/cli.js',
        'seed'
    ], {});
}
exports.seed = seed;
//# sourceMappingURL=seed.js.map