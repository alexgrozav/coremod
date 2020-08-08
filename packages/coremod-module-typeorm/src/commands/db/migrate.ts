import { spawn } from 'coremod/cli/helpers';

export async function migrate(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:run'
    ], {});
}
