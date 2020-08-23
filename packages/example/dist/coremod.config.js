"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const path_1 = require("path");
exports.configuration = {
    modules: [
        [path_1.resolve(__dirname, 'modules', 'local-module'), {
                something: true,
                configuration: {
                    host: '3031'
                }
            }],
        require.resolve('@coremod/logger'),
        require.resolve('@coremod/express'),
        [require.resolve('@coremod/public'), {
                favicon: false
            }],
        require.resolve('@coremod/typeorm'),
        [require.resolve('@coremod/authentication'), {
                configuration: {
                    jwt: {
                        secretOrKey: '##helloworld1234##'
                    }
                }
            }]
    ]
};
//# sourceMappingURL=coremod.config.js.map