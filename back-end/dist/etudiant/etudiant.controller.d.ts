import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto/update-etudiant.dto';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
    GetAllEtudiants(): Promise<any>;
    GetEtudiantById(id: number): Promise<any>;
    CreateEtudiant(etudiant: CreateEtudiantDto): void;
    UpdateEtudiant(etudiant: UpdateEtudiantDto, id: number): {
        success: boolean;
        data: UpdateEtudiantDto;
        id: number;
    } | {
        success: boolean;
        data?: undefined;
        id?: undefined;
    };
    DeleteEtudiant(id: string): {
        success: boolean;
    };
}
