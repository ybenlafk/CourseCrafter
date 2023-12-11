import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MatierService } from './matier.service';
import { CreateMatierDto } from './dto/create-matier.dto/create-matier.dto';
import { UpdateMatierDto } from './dto/update-matier.dto/update-matier.dto';

@Controller('matier')
export class MatierController 
{
    constructor (private readonly matierService: MatierService) {}

    @Get()
    async GetAllMatiers()
    {
        return await this.matierService.FindAllMatiers();
    }

    @Get(':id')
    async GetMatierById(@Param('id') id: number)
    {
        return await this.matierService.FindlMatierById(+id);
    }

    @Post()
    CreateMatier(@Body() data: CreateMatierDto)
    {
        this.matierService.CreatelMatier(data);
    }

    @Put(':id')
    UpdateMatier(@Body() data: UpdateMatierDto, @Param('id') id: number)
    {
        this.matierService.UpdatelMatier(+id, data);
    }
    @Delete(':id')
    DeleteMatier(@Param('id') id: number)
    {
        this.matierService.DeletelMatier(+id);
    }
}
