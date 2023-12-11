import { IsString } from "class-validator";

export class CreateProfDto 
{
    @IsString()
    readonly name: string;
}
