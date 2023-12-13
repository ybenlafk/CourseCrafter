import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto/update-group.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    GetAllGroups(): Promise<{
        etudiantsCount: number;
        id: number;
        duree: number;
        date: string;
        level: string;
        matiers_id: number;
        prof_id: number;
    }[]>;
    getEtudiantsCountForGroup(groupId: string): Promise<{
        count: number;
    }>;
    GetGroupById(id: number): Promise<{
        id: number;
        duree: number;
        date: string;
        level: string;
        matiers_id: number;
        prof_id: number;
    }>;
    CreateGroup(group: CreateGroupDto): void;
    UpdateGroup(group: UpdateGroupDto, id: number): void;
    DeleteGroup(id: number): void;
}
