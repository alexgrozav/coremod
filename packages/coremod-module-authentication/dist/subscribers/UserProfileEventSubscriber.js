"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileEventSubscriber = void 0;
const tslib_1 = require("tslib");
const event_dispatch_1 = require("event-dispatch");
const logger_1 = require("@coremod/logger");
const UserProfile_1 = require("../models/UserProfile");
const events_1 = require("./events");
const log = new logger_1.Logger(__filename);
let UserProfileEventSubscriber = class UserProfileEventSubscriber {
    onUserProfileCreate(profile) {
        log.info('User profile ' + profile.toString() + ' created!');
    }
};
tslib_1.__decorate([
    event_dispatch_1.On(events_1.events.user.created),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserProfile_1.UserProfile]),
    tslib_1.__metadata("design:returntype", void 0)
], UserProfileEventSubscriber.prototype, "onUserProfileCreate", null);
UserProfileEventSubscriber = tslib_1.__decorate([
    event_dispatch_1.EventSubscriber()
], UserProfileEventSubscriber);
exports.UserProfileEventSubscriber = UserProfileEventSubscriber;
//# sourceMappingURL=UserProfileEventSubscriber.js.map