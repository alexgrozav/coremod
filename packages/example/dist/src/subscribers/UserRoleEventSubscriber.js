"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleEventSubscriber = void 0;
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const logger_1 = require("@coremod/logger");
const UserRole_1 = require("../models/UserRole");
const events_1 = require("./events");
const log = new logger_1.Logger(__filename);
let UserRoleEventSubscriber = class UserRoleEventSubscriber {
    onUserRoleCreate(role) {
        log.info('User role ' + role.toString() + ' created!');
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.user.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserRole_1.UserRole]),
    tslib_1.__metadata("design:returntype", void 0)
], UserRoleEventSubscriber.prototype, "onUserRoleCreate", null);
UserRoleEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], UserRoleEventSubscriber);
exports.UserRoleEventSubscriber = UserRoleEventSubscriber;
//# sourceMappingURL=UserRoleEventSubscriber.js.map