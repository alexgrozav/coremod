"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDev = void 0;
const drop_1 = require("./drop");
const migrate_1 = require("./migrate");
const seedDev_1 = require("./seedDev");
async function setupDev(argv) {
    // npm run db:drop && npm run db:migrate && npm run db:seed
    await drop_1.drop(argv);
    await migrate_1.migrate(argv);
    await seedDev_1.seedDev(argv);
}
exports.setupDev = setupDev;
//# sourceMappingURL=setupDev.js.map