"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module = void 0;
const tslib_1 = require("tslib");
const configuration_1 = require("./configuration");
const module_options_1 = require("./module-options");
const runtime_1 = require("./runtime");
tslib_1.__exportStar(require("./configuration"), exports);
tslib_1.__exportStar(require("./module-options"), exports);
tslib_1.__exportStar(require("./runtime"), exports);
exports.module = {
    namespace: 'swagger',
    configuration: configuration_1.configuration,
    moduleOptions: module_options_1.moduleOptions,
    runtime: runtime_1.runtime
};
exports.default = exports.module;
//# sourceMappingURL=index.js.map