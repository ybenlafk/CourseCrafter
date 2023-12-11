import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EtudiantModule } from './etudiant/etudiant.module';
import { GroupModule } from './group/group.module';
import { FormationModule } from './formation/formation.module';
import { MatierModule } from './matier/matier.module';
import { ProfModule } from './prof/prof.module';

@Module({
  imports: [EtudiantModule, GroupModule, FormationModule, MatierModule, ProfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
