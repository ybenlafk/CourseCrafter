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
exports.ProfController = void 0;
const common_1 = require("@nestjs/common");
const prof_service_1 = require("./prof.service");
const create_prof_dto_1 = require("./dto/create-prof.dto/create-prof.dto");
const update_prof_dto_1 = require("./dto/update-prof.dto/update-prof.dto");
let ProfController = class ProfController {
    constructor(profService) {
        this.profService = profService;
    }
    async GetAllEtudiants() {
        return await this.profService.FindAllProfs();
    }
    async GetEtudiantById(id) {
        return await this.profService.FindProfById(+id);
    }
    CreateEtudiant(etudiant) {
        this.profService.CreateProf(etudiant);
    }
    UpdateEtudiant(etudiant, id) {
        this.profService.UpdateProf(+id, etudiant);
    }
    DeleteEtudiant(id) {
        this.profService.DeleteProf(+id);
    }
};
exports.ProfController = ProfController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfController.prototype, "GetAllEtudiants", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfController.prototype, "GetEtudiantById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prof_dto_1.CreateProfDto]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "CreateEtudiant", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_prof_dto_1.UpdateProfDto, Number]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "UpdateEtudiant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProfController.prototype, "DeleteEtudiant", null);
exports.ProfController = ProfController = __decorate([
    (0, common_1.Controller)('prof'),
    __metadata("design:paramtypes", [prof_service_1.ProfService])
], ProfController);
//# sourceMappingURL=prof.controller.js.map