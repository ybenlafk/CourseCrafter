import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto/update-group.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    GetAllGroups(): Promise<any>;
    getEtudiantsCountForGroup(groupId: string): Promise<{
        count: number;
    }>;
    GetGroupById(id: number): Promise<any>;
    CreateGroup(group: CreateGroupDto): void;
    UpdateGroup(group: UpdateGroupDto, id: number): void;
    DeleteGroup(id: number): void;
}
