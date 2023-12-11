import { Module } from '@nestjs/common';
import { ProfController } from './prof.controller';
import { ProfService } from './prof.service';

@Module({
    controllers: [ProfController],
    providers: [ProfService]
})
export class ProfModule {}
