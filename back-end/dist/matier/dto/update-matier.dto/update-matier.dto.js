"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMatierDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_matier_dto_1 = require("../create-matier.dto/create-matier.dto");
class UpdateMatierDto extends (0, mapped_types_1.PartialType)(create_matier_dto_1.CreateMatierDto) {
}
exports.UpdateMatierDto = UpdateMatierDto;
//# sourceMappingURL=update-matier.dto.js.map