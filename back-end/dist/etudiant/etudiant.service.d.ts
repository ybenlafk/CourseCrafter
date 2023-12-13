import { Prisma } from '@prisma/client';
export declare class EtudiantService {
    private readonly prisma;
    constructor();
    FindAllEtudiants(): Promise<any>;
    FindEtudiantById(id: number): Promise<any>;
    GetEtudiantsCountForGroup(groupId: number): Promise<number>;
    CreateEtudiant(etudiant: Prisma.EtudiantCreateInput): Promise<any>;
    UpdateEtudiant(id: number, etudiant: Prisma.EtudiantUpdateInput): Promise<any>;
    DeleteEtudiant(id: number): Promise<any>;
}
