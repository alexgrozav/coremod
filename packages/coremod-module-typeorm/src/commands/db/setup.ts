import { drop } from './drop';
import { migrate } from './migrate';
import { seed } from './seed';

export async function setup(argv) {
    // npm run db:drop && npm run db:migrate && npm run db:seed
    await drop(argv);
    await migrate(argv);
    await seed(argv);
}
