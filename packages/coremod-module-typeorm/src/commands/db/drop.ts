import { spawn } from 'coremod/dist/cli/helpers';

export async function drop(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        '--ignore', '"node_modules/(?!@?coremod)"',
        'node_modules/typeorm/cli.js',
        'schema:drop'
    ], {});
}
