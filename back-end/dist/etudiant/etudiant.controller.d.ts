import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto/update-etudiant.dto';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
    GetAllEtudiants(): Promise<{
        id: number;
        email: string;
        name: string;
        username: string;
        code_postal: number;
        date_nes: string;
        nb_pre: number;
        price: number;
        group_id: number;
    }[]>;
    GetEtudiantById(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        username: string;
        code_postal: number;
        date_nes: string;
        nb_pre: number;
        price: number;
        group_id: number;
    }>;
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
