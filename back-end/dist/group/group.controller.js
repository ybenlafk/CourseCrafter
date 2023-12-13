"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const create_group_dto_1 = require("./dto/create-group.dto/create-group.dto");
const update_group_dto_1 = require("./dto/update-group.dto/update-group.dto");
let GroupController = class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async GetAllGroups() {
        const groups = await this.groupService.FindAllGroups();
        const groupsWithEtudiantsCount = await Promise.all(groups.map(async (group) => {
            const etudiantsCount = await this.groupService.GetEtudiantsCountForGroup(group.id);
            return { ...group, etudiantsCount };
        }));
        return groupsWithEtudiantsCount;
    }
    async getEtudiantsCountForGroup(groupId) {
        const etudiantsCount = await this.groupService.GetEtudiantsCountForGroup(+groupId);
        return { count: etudiantsCount };
    }
    async GetGroupById(id) {
        return await this.groupService.FindGroupById(+id);
    }
    CreateGroup(group) {
        this.groupService.CreateGroup(group);
    }
    UpdateGroup(group, id) {
        this.groupService.UpdateGroup(+id, group);
    }
    DeleteGroup(id) {
        this.groupService.DeleteGroup(+id);
    }
};
exports.GroupController = GroupController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "GetAllGroups", null);
__decorate([
    (0, common_1.Get)(':id/etudiants/count'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "getEtudiantsCountForGroup", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "GetGroupById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "CreateGroup", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_group_dto_1.UpdateGroupDto, Number]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "UpdateGroup", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "DeleteGroup", null);
exports.GroupController = GroupController = __decorate([
    (0, common_1.Controller)('group'),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
//# sourceMappingURL=group.controller.js.map