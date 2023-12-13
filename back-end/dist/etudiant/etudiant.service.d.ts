import { Prisma } from '@prisma/client';
export declare class EtudiantService {
    private readonly prisma;
    constructor();
    FindAllEtudiants(): Promise<{
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
    FindEtudiantById(id: number): Promise<{
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
    GetEtudiantsCountForGroup(groupId: number): Promise<number>;
    CreateEtudiant(etudiant: Prisma.EtudiantCreateInput): Promise<{
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
    UpdateEtudiant(id: number, etudiant: Prisma.EtudiantUpdateInput): Promise<{
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
    DeleteEtudiant(id: number): Promise<{
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
}
