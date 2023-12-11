import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProfService } from './prof.service';
import { CreateProfDto } from './dto/create-prof.dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto/update-prof.dto';

@Controller('prof')
export class ProfController 
{
    constructor(private readonly profService: ProfService) {}

    @Get()
    async GetAllEtudiants()
    {
        return await this.profService.FindAllProfs();
    }

    @Get(':id')
    async GetEtudiantById(@Param('id') id: number)
    {
        return await this.profService.FindProfById(+id);
    }

    @Post()
    CreateEtudiant(@Body() etudiant: CreateProfDto)
    {
        this.profService.CreateProf(etudiant);
    }
    @Put(':id')
    UpdateEtudiant(@Body() etudiant: UpdateProfDto,@Param('id') id: number)
    {
        this.profService.UpdateProf(+id, etudiant);
    }

    @Delete(':id')
    DeleteEtudiant(@Param('id') id: number)
    {
        this.profService.DeleteProf(+id);
    }
}
