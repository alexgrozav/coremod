"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module = void 0;
const tslib_1 = require("tslib");
const configuration_1 = require("./configuration");
const runtime_1 = require("./runtime");
tslib_1.__exportStar(require("./configuration"), exports);
tslib_1.__exportStar(require("./runtime"), exports);
tslib_1.__exportStar(require("./logger"), exports);
exports.module = {
    namespace: 'logs',
    configuration: configuration_1.configuration,
    runtime: runtime_1.runtime
};
exports.default = exports.module;
//# sourceMappingURL=index.js.map