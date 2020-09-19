"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const local_module_1 = require("./modules/local-module");
const ioc_1 = require("@coremod/ioc");
const logger_1 = require("@coremod/logger");
const express_1 = require("@coremod/express");
const public_1 = require("@coremod/public");
const typeorm_1 = require("@coremod/typeorm");
const swagger_1 = require("@coremod/swagger");
const authentication_1 = require("@coremod/authentication");
const User_1 = require("@app/models/User");
exports.configuration = {
    modules: [
        ioc_1.module,
        [local_module_1.module, {
                something: true,
                configuration: {
                    host: '3031'
                }
            }],
        logger_1.module,
        [express_1.module, {
                authorizationChecker: authentication_1.authorizationChecker(User_1.User),
                currentUserChecker: authentication_1.currentUserChecker(User_1.User)
            }],
        [public_1.module, {
                favicon: false
            }],
        typeorm_1.module,
        [authentication_1.module, {
                model: User_1.User,
                configuration: {
                    jwt: {
                        secretOrKey: '##helloworld1234##'
                    }
                }
            }],
        swagger_1.module
    ]
};
//# sourceMappingURL=coremod.config.js.map