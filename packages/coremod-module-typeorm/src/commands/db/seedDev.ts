import { spawn } from 'coremod/cli/helpers';

export async function seedDev(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm-seeding/dist/cli.js',
        'seed',
        '-c', 'development'
    ], {});
}