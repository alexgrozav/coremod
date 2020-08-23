"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const uuid_1 = require("uuid");
const typeorm_1 = require("@coremod/typeorm");
const logger_1 = require("@coremod/logger");
const UserRepository_1 = require("@app/repositories/UserRepository");
const events_1 = require("@app/subscribers/events");
let UserService = class UserService {
    constructor(userRepository, eventDispatcher, log) {
        this.userRepository = userRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    list() {
        this.log.info('Find all users');
        return this.userRepository.find({ relations: ['roles', 'profile'] });
    }
    find(id) {
        this.log.info('Find one user');
        return this.userRepository.findOne({ id }, { relations: ['roles', 'profile'] });
    }
    async create(user) {
        this.log.info('Create a new user => ', user.toString());
        user.id = uuid_1.v4();
        const newUser = await this.userRepository.save(user);
        this.eventDispatcher.dispatch(events_1.events.user.created, newUser);
        return newUser;
    }
    update(id, user) {
        this.log.info('Update a user');
        user.id = id;
        return this.userRepository.save(user);
    }
    async delete(id) {
        this.log.info('Delete a user');
        await this.userRepository.delete(id);
        return;
    }
};
UserService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_1.EventDispatcher()),
    tslib_1.__param(2, logger_1.DLogger(__filename)),
    tslib_1.__metadata("design:paramtypes", [UserRepository_1.UserRepository,
        typeorm_1.EventDispatcherInterface, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map