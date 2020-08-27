"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const uuid_1 = require("uuid");
const typeorm_1 = require("@coremod/typeorm");
const logger_1 = require("@coremod/logger");
const repositories_1 = require("../repositories");
const subscribers_1 = require("../subscribers");
let UserRoleService = class UserRoleService {
    constructor(userRoleRepository, eventDispatcher, log) {
        this.userRoleRepository = userRoleRepository;
        this.eventDispatcher = eventDispatcher;
        this.log = log;
    }
    find() {
        this.log.info('Find all user roles');
        return this.userRoleRepository.find();
    }
    findOne(id) {
        this.log.info('Find user role');
        return this.userRoleRepository.findOne({ id });
    }
    async create(role) {
        this.log.info('Create a new user role => ', role.toString());
        role.id = uuid_1.v4();
        const newUserRole = await this.userRoleRepository.save(role);
        this.eventDispatcher.dispatch(subscribers_1.events.userRole.created, newUserRole);
        return newUserRole;
    }
    update(id, role) {
        this.log.info('Update an user role');
        role.id = id;
        return this.userRoleRepository.save(role);
    }
    async delete(id) {
        this.log.info('Delete an user role');
        await this.userRoleRepository.delete(id);
        return;
    }
};
UserRoleService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, typeorm_1.EventDispatcher()),
    tslib_1.__param(2, logger_1.DLogger(__filename)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRoleRepository,
        typeorm_1.EventDispatcherInterface, Object])
], UserRoleService);
exports.UserRoleService = UserRoleService;
//# sourceMappingURL=UserRoleService.js.map