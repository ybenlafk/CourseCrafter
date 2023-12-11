import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto/update-etudiant.dto';


@Controller('etudiant')
export class EtudiantController 
{
    constructor(private readonly etudiantService: EtudiantService) {}

    @Get()
    async GetAllEtudiants()
    {
        return await this.etudiantService.FindAllEtudiants();
    }

    @Get(':id')
    async GetEtudiantById(@Param('id') id: number)
    {
        return await this.etudiantService.FindEtudiantById(+id);
    }

    @Post()
    CreateEtudiant(@Body() etudiant: CreateEtudiantDto)
    {
        this.etudiantService.CreateEtudiant(etudiant);
    }
    @Put(':id')
    UpdateEtudiant(@Body() etudiant: UpdateEtudiantDto,@Param('id') id: number)
    {
        try 
        {
            this.etudiantService.UpdateEtudiant(+id, etudiant);
            return { success: true, data : etudiant, id : id };
        } catch (error) {
            console.log(error);
            return { success: false };
        }
    }

    @Delete(':id')
    DeleteEtudiant(@Param('id') id: string)
    {
        try
        {
            this.etudiantService.DeleteEtudiant(+id);
            return { success: true };
        }
        catch(error)
        {
            console.log(error);
            return { success: false };
        }
    }
}
