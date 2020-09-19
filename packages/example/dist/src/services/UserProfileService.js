"use strict";
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
    constructor(userProfileRepository, eventDispatcher, log) {
        this.userProfileRepository = userProfileRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    find() {
        this.log.info('Find all user profiles');
        return this.userProfileRepository.find();
    }
    findOne(id) {
        this.log.info('Find user profile');
        return this.userProfileRepository.findOne({ id });
    }
    async create(role) {
        this.log.info('Create a new user profile => ', role.toString());
        role.id = uuid_1.v4();
        const newUserProfile = await this.userProfileRepository.save(role);
        this.eventDispatcher.dispatch(subscribers_1.events.userProfile.created, newUserProfile);
        return newUserProfile;
    }
    update(id, profile) {
        this.log.info('Update an user profile');
        profile.id = id;
        return this.userProfileRepository.save(profile);
    }
    async delete(id) {
        this.log.info('Delete an user profile');
        await this.userProfileRepository.delete(id);
        return;
    }
};
UserProfileService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_1.EventDispatcher()),
    tslib_1.__param(2, logger_1.DLogger(__filename)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserProfileRepository,
        typeorm_1.EventDispatcherInterface, Object])
], UserProfileService);
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=UserProfileService.js.map