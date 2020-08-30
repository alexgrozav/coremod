"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DLogger = void 0;
const typedi_1 = require("typedi");
const Logger_1 = require("./Logger");
function DLogger(scope) {
    return (object, propertyKey, index) => {
        const logger = new Logger_1.Logger(scope);
        const propertyName = propertyKey ? propertyKey.toString() : '';
        typedi_1.Container.registerHandler({ object, propertyName, index, value: () => logger });
    };
}
exports.DLogger = DLogger;
//# sourceMappingURL=decorators.js.map