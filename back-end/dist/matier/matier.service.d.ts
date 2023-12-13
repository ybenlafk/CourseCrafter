import { Prisma } from '@prisma/client';
export declare class MatierService {
    private readonly prisma;
    constructor();
    FindAllMatiers(): Promise<{
        id: number;
        name: string;
        formation_id: number;
    }[]>;
    FindlMatierById(id: number): Promise<{
        id: number;
        name: string;
        formation_id: number;
    }>;
    CreatelMatier(group: Prisma.MatierCreateInput): Promise<{
        id: number;
        name: string;
        formation_id: number;
    }>;
    UpdatelMatier(id: number, group: Prisma.MatierUpdateInput): Promise<{
        id: number;
        name: string;
        formation_id: number;
    }>;
    DeletelMatier(id: number): Promise<{
        id: number;
        name: string;
        formation_id: number;
    }>;
}
