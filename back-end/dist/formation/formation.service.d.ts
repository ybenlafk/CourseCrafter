import { Prisma } from '@prisma/client';
export declare class FormationService {
    private readonly prisma;
    constructor();
    FindAllFormations(): Promise<any>;
    FindFormationById(id: number): Promise<any>;
    CreateFormation(group: Prisma.FormationCreateInput): Promise<any>;
    UpdateFormation(id: number, group: Prisma.FormationUpdateInput): Promise<any>;
    DeleteFormation(id: number): Promise<any>;
}
