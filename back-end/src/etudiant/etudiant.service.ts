import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class EtudiantService 
{
    private readonly prisma: PrismaClient;

    constructor()
    {
        this.prisma = new PrismaClient();
    }

    async FindAllEtudiants()
    {
      return await this.prisma.etudiant.findMany();
    }

    async FindEtudiantById(id: number)
    {
      return await this.prisma.etudiant.findUnique({
        where: {
          id : id,
        }
      });
    }
    async GetEtudiantsCountForGroup(groupId: number): Promise<number> {
      const etudiantsCount = await this.prisma.etudiant.count({
        where: {
          group_id: groupId,
        },
      });
  
      return etudiantsCount;
    }

    async CreateEtudiant(etudiant: Prisma.EtudiantCreateInput) {
      try {
        return await this.prisma.etudiant.create({
          data: etudiant,
        });
      } catch (error) {
          console.log('There is a user with this email already');
      }
    }

   async UpdateEtudiant(id: number, etudiant: Prisma.EtudiantUpdateInput)
    {
      try {
        return await  this.prisma.etudiant.update({
          where: {
            id: id,
          },
          data: {
              ...etudiant,
          }
        });
      } catch (error) {
        throw new Error(`The etudiant with id: ${id} does not exist!`);
      }
    }

   async DeleteEtudiant(id: number)
    {
      try{
          return await this.prisma.etudiant.delete({
            where: {
              id: id,
            }
          });
      } catch (error) {
          throw new Error(`The etudiant with id: ${id} does not exist!`);
      }
    }
}

