"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const src_1 = require("./src");
tslib_1.__exportStar(require("./src"), exports);
exports.default = {
    namespace: 'database',
    configuration: src_1.configuration,
    moduleOptions: src_1.moduleOptions,
    runtime: src_1.runtime,
    commands: src_1.commands
};
//# sourceMappingURL=index.js.map