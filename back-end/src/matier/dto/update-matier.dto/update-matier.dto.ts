import { PartialType } from "@nestjs/mapped-types";
import { CreateMatierDto } from "../create-matier.dto/create-matier.dto";

export class UpdateMatierDto extends PartialType(CreateMatierDto) {}
