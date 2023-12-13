import { ProfService } from './prof.service';
import { CreateProfDto } from './dto/create-prof.dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto/update-prof.dto';
export declare class ProfController {
    private readonly profService;
    constructor(profService: ProfService);
    GetAllEtudiants(): Promise<{
        id: number;
        name: string;
    }[]>;
    GetEtudiantById(id: number): Promise<{
        id: number;
        name: string;
    }>;
    CreateEtudiant(etudiant: CreateProfDto): void;
    UpdateEtudiant(etudiant: UpdateProfDto, id: number): void;
    DeleteEtudiant(id: number): void;
}
