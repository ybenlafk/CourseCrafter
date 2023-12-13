import { Prisma } from '@prisma/client';
export declare class ProfService {
    private readonly prisma;
    constructor();
    FindAllProfs(): Promise<{
        id: number;
        name: string;
    }[]>;
    FindProfById(id: number): Promise<{
        id: number;
        name: string;
    }>;
    CreateProf(etudiant: Prisma.ProffisourCreateInput): Promise<{
        id: number;
        name: string;
    }>;
    UpdateProf(id: number, etudiant: Prisma.ProffisourUpdateInput): Promise<{
        id: number;
        name: string;
    }>;
    DeleteProf(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
