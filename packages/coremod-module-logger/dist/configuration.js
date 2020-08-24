"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const coremod_1 = require("coremod");
exports.configuration = {
    level: coremod_1.env.get('LOG_LEVEL', 'debug'),
    json: coremod_1.env.toBoolean(coremod_1.env.get('LOG_JSON', 'true')),
    output: coremod_1.env.get('LOG_OUTPUT', 'dev'),
};
//# sourceMappingURL=configuration.js.map