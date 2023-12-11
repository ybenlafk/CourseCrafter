import {  Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FormationService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto/update-formation.dto';


@Controller('formation')
export class FormationController 
{
    constructor (private readonly formationService: FormationService) {}

    @Get()
    async GetAllFormations()
    {
        return await this.formationService.FindAllFormations();
    }

    @Get(':id')
    async GetFormationById(@Param('id') id: number)
    {
        return await this.formationService.FindFormationById(+id);
    }

    @Post()
    CreateFormation(@Body() data: CreateFormationDto)
    {
        this.formationService.CreateFormation(data);
    }

    @Put(':id')
    UpdateFormation(@Body() data: UpdateFormationDto, @Param('id') id: number)
    {
        this.formationService.UpdateFormation(+id, data);
    }
    @Delete(':id')
    DeleteFormation(@Param('id') id: number)
    {
        this.formationService.DeleteFormation(+id);
    }
}
