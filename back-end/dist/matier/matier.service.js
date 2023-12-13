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
exports.MatierService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let MatierService = class MatierService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async FindAllMatiers() {
        return await this.prisma.matier.findMany();
    }
    async FindlMatierById(id) {
        return await this.prisma.matier.findUnique({
            where: {
                id: id,
            }
        });
    }
    async CreatelMatier(group) {
        return await this.prisma.matier.create({
            data: group
        });
    }
    async UpdatelMatier(id, group) {
        return await this.prisma.matier.update({
            where: {
                id: id,
            },
            data: {
                ...group,
            }
        });
    }
    async DeletelMatier(id) {
        return await this.prisma.matier.delete({
            where: {
                id: id,
            }
        });
    }
};
exports.MatierService = MatierService;
exports.MatierService = MatierService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MatierService);
//# sourceMappingURL=matier.service.js.map