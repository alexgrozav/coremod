import { drop } from './drop';
import { migrate } from './migrate';
import { seedDev } from './seedDev';

export async function setupDev(argv) {
    // npm run db:drop && npm run db:migrate && npm run db:seed
    await drop(argv);
    await migrate(argv);
    await seedDev(argv);
}
