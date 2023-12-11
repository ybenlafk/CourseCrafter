import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto/update-group.dto';

@Controller('group')
export class GroupController 
{
    constructor (private readonly groupService: GroupService) {}

    @Get()
    async GetAllGroups() {
        const groups = await this.groupService.FindAllGroups();
      
        const groupsWithEtudiantsCount = await Promise.all(
          groups.map(async (group) => {
            const etudiantsCount = await this.groupService.GetEtudiantsCountForGroup(group.id);
            return { ...group, etudiantsCount };
          })
        );
      
        return groupsWithEtudiantsCount;
    }
    
    @Get(':id/etudiants/count')
    async getEtudiantsCountForGroup(@Param('id') groupId: string)
    {
        const etudiantsCount = await this.groupService.GetEtudiantsCountForGroup(+groupId);
        return { count: etudiantsCount };
    }

    @Get(':id')
    async GetGroupById(@Param('id') id: number)
    {
        return await this.groupService.FindGroupById(+id);
    }

    @Post()
    CreateGroup(@Body() group: CreateGroupDto)
    {
        this.groupService.CreateGroup(group);
    }

    @Put(':id')
    UpdateGroup(@Body() group: UpdateGroupDto, @Param('id') id: number)
    {
        this.groupService.UpdateGroup(+id, group);
    }
    @Delete(':id')
    DeleteGroup(@Param('id') id: number)
    {
        this.groupService.DeleteGroup(+id);
    }
}
