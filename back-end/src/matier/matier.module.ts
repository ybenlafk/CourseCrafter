import { Module } from '@nestjs/common';
import { MatierController } from './matier.controller';
import { MatierService } from './matier.service';

@Module({
    controllers: [MatierController],
    providers: [MatierService]
})
export class MatierModule {}
