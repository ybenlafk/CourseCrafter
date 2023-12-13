import { Prisma } from '@prisma/client';
export declare class GroupService {
    private readonly prisma;
    constructor();
    FindAllGroups(): Promise<{
        id: number;
        duree: number;
        date: string;
        level: string;
        matiers_id: number;
        prof_id: number;
    }[]>;
    FindGroupById(id: number): Promise<{
        id: number;
        duree: number;
        date: string;
        level: string;
        matiers_id: number;
        prof_id: number;
    }>;
    CreateGroup(group: Prisma.GroupCreateInput): Promise<{
        id: number;
        duree: number;
        date: string;
        level: string;
        matiers_id: number;
        prof_id: number;
    }>;
    UpdateGroup(id: number, group: Prisma.GroupUpdateInput): Promise<{
        id: number;
        duree: number;
        date: string;
        level: string;
        matiers_id: number;
        prof_id: number;
    }>;
    DeleteGroup(id: number): Promise<{
        id: number;
        duree: number;
        date: string;
        level: string;
        matiers_id: number;
        prof_id: number;
    }>;
    GetEtudiantsCountForGroup(groupId: number): Promise<number>;
}
