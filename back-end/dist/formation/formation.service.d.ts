import { Prisma } from '@prisma/client';
export declare class FormationService {
    private readonly prisma;
    constructor();
    FindAllFormations(): Promise<{
        id: number;
        name: string;
    }[]>;
    FindFormationById(id: number): Promise<{
        id: number;
        name: string;
    }>;
    CreateFormation(group: Prisma.FormationCreateInput): Promise<{
        id: number;
        name: string;
    }>;
    UpdateFormation(id: number, group: Prisma.FormationUpdateInput): Promise<{
        id: number;
        name: string;
    }>;
    DeleteFormation(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
