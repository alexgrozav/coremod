"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const uuid_1 = require("uuid");
const typeorm_1 = require("@coremod/typeorm");
const logger_1 = require("@coremod/logger");
const repositories_1 = require("../repositories");
const subscribers_1 = require("../subscribers");
let UserProfileService = class UserProfileService {
    constructor(UserProfileRepository, eventDispatcher, log) {
        this.UserProfileRepository = UserProfileRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    find() {
        this.log.info('Find all user profiles');
        return this.UserProfileRepository.find();
    }
    findOne(id) {
        this.log.info('Find user profile');
        return this.UserProfileRepository.findOne({ id });
    }
    async create(role) {
        this.log.info('Create a new user profile => ', role.toString());
        role.id = uuid_1.v4();
        const newUserProfile = await this.UserProfileRepository.save(role);
        this.eventDispatcher.dispatch(subscribers_1.events.userProfile.created, newUserProfile);
        return newUserProfile;
    }
    update(id, profile) {
        this.log.info('Update an user profile');
        profile.id = id;
        return this.UserProfileRepository.save(profile);
    }
    async delete(id) {
        this.log.info('Delete an user profile');
        await this.UserProfileRepository.delete(id);
        return;
    }
};
UserProfileService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_1.EventDispatcher()),
    tslib_1.__param(2, logger_1.DLogger(__filename)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserProfileRepository, typeof (_a = typeof typeorm_1.EventDispatcherInterface !== "undefined" && typeorm_1.EventDispatcherInterface) === "function" ? _a : Object, typeof (_b = typeof logger_1.LoggerInterface !== "undefined" && logger_1.LoggerInterface) === "function" ? _b : Object])
], UserProfileService);
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=UserProfileService.js.map