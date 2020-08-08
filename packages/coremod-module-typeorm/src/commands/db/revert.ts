import { spawn } from 'coremod/cli/helpers';

export async function revert(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:revert'
    ], {});
}