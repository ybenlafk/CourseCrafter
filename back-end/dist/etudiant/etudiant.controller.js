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
exports.EtudiantController = void 0;
const common_1 = require("@nestjs/common");
const etudiant_service_1 = require("./etudiant.service");
const create_etudiant_dto_1 = require("./dto/create-etudiant.dto/create-etudiant.dto");
const update_etudiant_dto_1 = require("./dto/update-etudiant.dto/update-etudiant.dto");
let EtudiantController = class EtudiantController {
    constructor(etudiantService) {
        this.etudiantService = etudiantService;
    }
    async GetAllEtudiants() {
        return await this.etudiantService.FindAllEtudiants();
    }
    async GetEtudiantById(id) {
        return await this.etudiantService.FindEtudiantById(+id);
    }
    CreateEtudiant(etudiant) {
        this.etudiantService.CreateEtudiant(etudiant);
    }
    UpdateEtudiant(etudiant, id) {
        try {
            this.etudiantService.UpdateEtudiant(+id, etudiant);
            return { success: true, data: etudiant, id: id };
        }
        catch (error) {
            console.log(error);
            return { success: false };
        }
    }
    DeleteEtudiant(id) {
        try {
            this.etudiantService.DeleteEtudiant(+id);
            return { success: true };
        }
        catch (error) {
            console.log(error);
            return { success: false };
        }
    }
};
exports.EtudiantController = EtudiantController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "GetAllEtudiants", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "GetEtudiantById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etudiant_dto_1.CreateEtudiantDto]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "CreateEtudiant", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_etudiant_dto_1.UpdateEtudiantDto, Number]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "UpdateEtudiant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "DeleteEtudiant", null);
exports.EtudiantController = EtudiantController = __decorate([
    (0, common_1.Controller)('etudiant'),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService])
], EtudiantController);
//# sourceMappingURL=etudiant.controller.js.map