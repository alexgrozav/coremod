"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const configuration_1 = require("./configuration");
const runtime_1 = require("./runtime");
tslib_1.__exportStar(require("./configuration"), exports);
tslib_1.__exportStar(require("./runtime"), exports);
exports.default = {
    configuration: configuration_1.configuration,
    runtime: runtime_1.runtime
};
//# sourceMappingURL=index.js.map