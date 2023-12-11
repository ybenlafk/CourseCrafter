import { PartialType } from "@nestjs/mapped-types";
import { CreateFormationDto } from "../create-formation.dto/create-formation.dto";

export class UpdateFormationDto extends PartialType(CreateFormationDto) {}
