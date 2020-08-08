import { spawn } from 'coremod/cli/helpers';

export async function migration(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'migration:create',
        '-n', argv.name
    ], {});
}
