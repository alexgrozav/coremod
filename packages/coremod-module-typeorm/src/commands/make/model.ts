import { spawn } from 'coremod/dist/cli/helpers';

export async function model(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'entity:create',
        '-n', argv.name
    ], {});
}
