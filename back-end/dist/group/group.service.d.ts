import { Prisma } from '@prisma/client';
export declare class GroupService {
    private readonly prisma;
    constructor();
    FindAllGroups(): Promise<any>;
    FindGroupById(id: number): Promise<any>;
    CreateGroup(group: Prisma.GroupCreateInput): Promise<any>;
    UpdateGroup(id: number, group: Prisma.GroupUpdateInput): Promise<any>;
    DeleteGroup(id: number): Promise<any>;
    GetEtudiantsCountForGroup(groupId: number): Promise<number>;
}
