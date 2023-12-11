import { IsDate, IsInt, IsString } from "class-validator";

export class CreateEtudiantDto 
{
    @IsString()
    readonly email: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly username: string;
    @IsInt()
    readonly code_postal: number;
}
