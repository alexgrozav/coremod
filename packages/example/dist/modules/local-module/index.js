"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module = void 0;
const configuration_1 = require("./configuration");
const runtime_1 = require("./runtime");
exports.module = {
    namespace: 'local',
    configuration: configuration_1.configuration,
    runtime: runtime_1.runtime
};
exports.default = exports.module;
//# sourceMappingURL=index.js.map