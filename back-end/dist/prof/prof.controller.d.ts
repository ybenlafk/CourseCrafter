import { ProfService } from './prof.service';
import { CreateProfDto } from './dto/create-prof.dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto/update-prof.dto';
export declare class ProfController {
    private readonly profService;
    constructor(profService: ProfService);
    GetAllEtudiants(): Promise<any>;
    GetEtudiantById(id: number): Promise<any>;
    CreateEtudiant(etudiant: CreateProfDto): void;
    UpdateEtudiant(etudiant: UpdateProfDto, id: number): void;
    DeleteEtudiant(id: number): void;
}
