import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class MatierService 
{
    private readonly prisma: PrismaClient;
    
    constructor()
    {
        this.prisma = new PrismaClient();
    }
    
    async FindAllMatiers()
    {
      return await this.prisma.matier.findMany();
    }
    
    async FindlMatierById(id: number)
    {
      return await this.prisma.matier.findUnique({
        where: {
          id : id,
        }
      });
    }
    
    async CreatelMatier(group: Prisma.MatierCreateInput)
    {
      return await this.prisma.matier.create({
        data: group
      });
    }
    
    async UpdatelMatier(id: number, group: Prisma.MatierUpdateInput)
    {
      return await  this.prisma.matier.update({
        where: {
          id: id,
        },
        data: {
            ...group,
        }
      });
    }
    
    async DeletelMatier(id: number)
    {
      return await this.prisma.matier.delete({
        where: {
          id: id,
        }
      });
    }
}
