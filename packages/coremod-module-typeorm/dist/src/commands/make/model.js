"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
const helpers_1 = require("coremod/dist/cli/helpers");
async function model(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'entity:create',
        '-n', argv.name
    ], {});
}
exports.model = model;
//# sourceMappingURL=model.js.map