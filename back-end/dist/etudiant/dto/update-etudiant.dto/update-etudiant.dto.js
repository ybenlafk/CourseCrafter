"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEtudiantDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_etudiant_dto_1 = require("../create-etudiant.dto/create-etudiant.dto");
class UpdateEtudiantDto extends (0, mapped_types_1.PartialType)(create_etudiant_dto_1.CreateEtudiantDto) {
}
exports.UpdateEtudiantDto = UpdateEtudiantDto;
//# sourceMappingURL=update-etudiant.dto.js.map