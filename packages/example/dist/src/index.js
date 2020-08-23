"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coremod_1 = require("coremod");
const coremod_config_1 = require("../coremod.config");
(async () => {
    const coremod = new coremod_1.Coremod(coremod_config_1.configuration);
    await coremod.initialize();
    await coremod.run();
})();
//# sourceMappingURL=index.js.map