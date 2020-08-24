"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const drop_1 = require("./drop");
const migrate_1 = require("./migrate");
const seed_1 = require("./seed");
async function setup(argv) {
    // npm run db:drop && npm run db:migrate && npm run db:seed
    await drop_1.drop(argv);
    await migrate_1.migrate(argv);
    await seed_1.seed(argv);
}
exports.setup = setup;
//# sourceMappingURL=setup.js.map