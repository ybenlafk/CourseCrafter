import { IsInt, IsString } from "class-validator";

export class CreateMatierDto 
{
    @IsString()
    name: string;
    @IsInt()
    formation_id : number;
}
