"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
exports.runtime = (context, configuration, moduleOptions) => {
    typeorm_1.useContainer(typedi_1.Container);
    routing_controllers_1.useContainer(typedi_1.Container);
    class_validator_1.useContainer(typedi_1.Container);
};
//# sourceMappingURL=runtime.js.map