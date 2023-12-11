import { Test, TestingModule } from '@nestjs/testing';
import { MatierService } from './matier.service';

describe('MatierService', () => {
  let service: MatierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatierService],
    }).compile();

    service = module.get<MatierService>(MatierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
