import { Test, TestingModule } from '@nestjs/testing';
import { MatierController } from './matier.controller';

describe('MatierController', () => {
  let controller: MatierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatierController],
    }).compile();

    controller = module.get<MatierController>(MatierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
