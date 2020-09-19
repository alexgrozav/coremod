"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
const winston_1 = require("winston");
exports.runtime = (context, configuration, moduleOptions) => {
    winston_1.configure({
        transports: [
            new winston_1.transports.Console({
                level: configuration.logs.level,
                handleExceptions: true,
                format: configuration.env !== 'development'
                    ? winston_1.format.combine(winston_1.format.json())
                    : winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
            }),
        ],
    });
};
//# sourceMappingURL=runtime.js.map