import { IsInt, IsString } from "class-validator";

export class CreateGroupDto 
{
    @IsInt()
    duree: number;
    @IsString()
    date: string;
    @IsInt()
    matiers_id: number;
}
