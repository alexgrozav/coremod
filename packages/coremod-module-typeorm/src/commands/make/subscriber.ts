import { spawn } from 'coremod/cli/helpers';

export async function subscriber(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'subscriber:create',
        '-n', argv.name
    ], {});
}
