"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const path_1 = require("path");
exports.configuration = {
    application: {
        public: {
            maxAge: 31557600000
        }
    },
    paths: {
        public: path_1.resolve(process.cwd(), 'public')
    },
};
//# sourceMappingURL=configuration.js.map