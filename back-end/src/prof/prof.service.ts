import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class ProfService 
{
    private readonly prisma: PrismaClient;

    constructor()
    {
        this.prisma = new PrismaClient();
    }

    async FindAllProfs()
    {
      return await this.prisma.proffisour.findMany();
    }

    async FindProfById(id: number)
    {
      return await this.prisma.proffisour.findUnique({
        where: {
          id : id,
        }
      });
    }

    async CreateProf(etudiant: Prisma.ProffisourCreateInput) {
      try {
        return await this.prisma.proffisour.create({
          data: etudiant,
        });
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2002' &&
          (error.meta.target as string[]).includes('email_unique')
        ) {
          // Handle the case when the email is not unique
          console.log('There is a user with this email already');
        } else {
          // Propagate other errors
          console.log('There is a user with this email already');
        }
      }
    }

   async UpdateProf(id: number, etudiant: Prisma.ProffisourUpdateInput)
    {
      return await  this.prisma.proffisour.update({
        where: {
          id: id,
        },
        data: {
            ...etudiant,
        }
      });
    }

   async DeleteProf(id: number)
    {
      return await this.prisma.proffisour.delete({
        where: {
          id: id,
        }
      });
    }
}
