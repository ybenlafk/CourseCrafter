import { Prisma } from '@prisma/client';
export declare class ProfService {
    private readonly prisma;
    constructor();
    FindAllProfs(): Promise<any>;
    FindProfById(id: number): Promise<any>;
    CreateProf(etudiant: Prisma.ProffisourCreateInput): Promise<any>;
    UpdateProf(id: number, etudiant: Prisma.ProffisourUpdateInput): Promise<any>;
    DeleteProf(id: number): Promise<any>;
}
