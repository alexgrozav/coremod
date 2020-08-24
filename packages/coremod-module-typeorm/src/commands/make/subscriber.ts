import { spawn } from 'coremod/dist/cli/helpers';

export async function subscriber(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'subscriber:create',
        '-n', argv.name
    ], {});
}
