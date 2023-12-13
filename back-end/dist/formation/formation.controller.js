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
exports.FormationController = void 0;
const common_1 = require("@nestjs/common");
const formation_service_1 = require("./formation.service");
const create_formation_dto_1 = require("./dto/create-formation.dto/create-formation.dto");
const update_formation_dto_1 = require("./dto/update-formation.dto/update-formation.dto");
let FormationController = class FormationController {
    constructor(formationService) {
        this.formationService = formationService;
    }
    async GetAllFormations() {
        return await this.formationService.FindAllFormations();
    }
    async GetFormationById(id) {
        return await this.formationService.FindFormationById(+id);
    }
    CreateFormation(data) {
        this.formationService.CreateFormation(data);
    }
    UpdateFormation(data, id) {
        this.formationService.UpdateFormation(+id, data);
    }
    DeleteFormation(id) {
        this.formationService.DeleteFormation(+id);
    }
};
exports.FormationController = FormationController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormationController.prototype, "GetAllFormations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FormationController.prototype, "GetFormationById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_formation_dto_1.CreateFormationDto]),
    __metadata("design:returntype", void 0)
], FormationController.prototype, "CreateFormation", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_formation_dto_1.UpdateFormationDto, Number]),
    __metadata("design:returntype", void 0)
], FormationController.prototype, "UpdateFormation", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FormationController.prototype, "DeleteFormation", null);
exports.FormationController = FormationController = __decorate([
    (0, common_1.Controller)('formation'),
    __metadata("design:paramtypes", [formation_service_1.FormationService])
], FormationController);
//# sourceMappingURL=formation.controller.js.map