import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class FormationService 
{
    private readonly prisma: PrismaClient;
    
    constructor()
    {
        this.prisma = new PrismaClient();
    }
    
    async FindAllFormations()
    {
      return await this.prisma.formation.findMany();
    }
    
    async FindFormationById(id: number)
    {
      return await this.prisma.formation.findUnique({
        where: {
          id : id,
        }
      });
    }
    
    async CreateFormation(group: Prisma.FormationCreateInput)
    {
      return await this.prisma.formation.create({
        data: group
      });
    }
    
    async UpdateFormation(id: number, group: Prisma.FormationUpdateInput)
    {
      return await  this.prisma.formation.update({
        where: {
          id: id,
        },
        data: {
            ...group,
        }
      });
    }
    
    async DeleteFormation(id: number)
    {
      return await this.prisma.formation.delete({
        where: {
          id: id,
        }
      });
    }
}
