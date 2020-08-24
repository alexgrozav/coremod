import { spawn } from 'coremod/dist/cli/helpers';

export async function status(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:show'
    ], {});
}
