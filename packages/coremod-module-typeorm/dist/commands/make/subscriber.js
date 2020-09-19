"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriber = void 0;
const helpers_1 = require("coremod/dist/cli/helpers");
async function subscriber(argv) {
    await helpers_1.spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        '--ignore', '"node_modules/(?!@?coremod)"',
        'node_modules/typeorm/cli.js',
        'subscriber:create',
        '-n', argv.name
    ], {});
}
exports.subscriber = subscriber;
//# sourceMappingURL=subscriber.js.map