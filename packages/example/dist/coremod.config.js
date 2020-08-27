"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const local_module_1 = require("./modules/local-module");
const src_1 = require("@coremod/logger/src");
const src_2 = require("@coremod/express/src");
const src_3 = require("@coremod/public/src");
const src_4 = require("@coremod/typeorm/src");
const src_5 = require("@coremod/authentication/src");
exports.configuration = {
    modules: [
        [local_module_1.module, {
                something: true,
                configuration: {
                    host: '3031'
                }
            }],
        src_1.module,
        src_2.module,
        [src_3.module, {
                favicon: false
            }],
        src_4.module,
        [src_5.module, {
                configuration: {
                    jwt: {
                        secretOrKey: '##helloworld1234##'
                    }
                }
            }]
    ]
};
//# sourceMappingURL=coremod.config.js.map