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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let GroupService = class GroupService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async FindAllGroups() {
        return await this.prisma.group.findMany();
    }
    async FindGroupById(id) {
        return await this.prisma.group.findUnique({
            where: {
                id: id,
            },
        });
    }
    async CreateGroup(group) {
        return await this.prisma.group.create({
            data: group,
        });
    }
    async UpdateGroup(id, group) {
        return await this.prisma.group.update({
            where: {
                id: id,
            },
            data: {
                ...group,
            },
        });
    }
    async DeleteGroup(id) {
        return await this.prisma.group.delete({
            where: {
                id: id,
            },
        });
    }
    async GetEtudiantsCountForGroup(groupId) {
        const group = await this.prisma.group.findUnique({
            where: { id: groupId },
            include: { etudiants: true },
        });
        return group.etudiants.length;
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GroupService);
//# sourceMappingURL=group.service.js.map