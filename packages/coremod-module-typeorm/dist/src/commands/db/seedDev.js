"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDev = void 0;
const helpers_1 = require("coremod/dist/cli/helpers");
async function seedDev(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm-seeding/dist/cli.js',
        'seed',
        '-c', 'development'
    ], {});
}
exports.seedDev = seedDev;
//# sourceMappingURL=seedDev.js.map