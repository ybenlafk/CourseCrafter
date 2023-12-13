import { FormationService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto/update-formation.dto';
export declare class FormationController {
    private readonly formationService;
    constructor(formationService: FormationService);
    GetAllFormations(): Promise<{
        id: number;
        name: string;
    }[]>;
    GetFormationById(id: number): Promise<{
        id: number;
        name: string;
    }>;
    CreateFormation(data: CreateFormationDto): void;
    UpdateFormation(data: UpdateFormationDto, id: number): void;
    DeleteFormation(id: number): void;
}
