import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class GroupService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async FindAllGroups() {
    return await this.prisma.group.findMany();
  }

  async FindGroupById(id: number) {
    return await this.prisma.group.findUnique({
      where: {
        id: id,
      },
    });
  }

  async CreateGroup(group: Prisma.GroupCreateInput) {
    return await this.prisma.group.create({
      data: group,
    });
  }

  async UpdateGroup(id: number, group: Prisma.GroupUpdateInput) {
    return await this.prisma.group.update({
      where: {
        id: id,
      },
      data: {
        ...group,
      },
    });
  }

  async DeleteGroup(id: number) {
    return await this.prisma.group.delete({
      where: {
        id: id,
      },
    });
  }

  async GetEtudiantsCountForGroup(groupId: number): Promise<number> {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: { etudiants: true },
    });

    return group.etudiants.length;
  }
}
