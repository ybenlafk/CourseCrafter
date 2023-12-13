import { Prisma } from '@prisma/client';
export declare class MatierService {
    private readonly prisma;
    constructor();
    FindAllMatiers(): Promise<any>;
    FindlMatierById(id: number): Promise<any>;
    CreatelMatier(group: Prisma.MatierCreateInput): Promise<any>;
    UpdatelMatier(id: number, group: Prisma.MatierUpdateInput): Promise<any>;
    DeletelMatier(id: number): Promise<any>;
}
