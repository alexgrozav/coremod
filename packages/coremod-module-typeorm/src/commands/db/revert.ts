import { spawn } from 'coremod/dist/cli/helpers';

export async function revert(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:revert'
    ], {});
}
