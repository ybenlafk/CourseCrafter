"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prof_dto_1 = require("../create-prof.dto/create-prof.dto");
class UpdateProfDto extends (0, mapped_types_1.PartialType)(create_prof_dto_1.CreateProfDto) {
}
exports.UpdateProfDto = UpdateProfDto;
//# sourceMappingURL=update-prof.dto.js.map