import { Test, TestingModule } from '@nestjs/testing';
import { DepartementsService } from './departements.service';

describe('DepartementsService', () => {
  let service: DepartementsService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartementsService],
    }).compile();
    service = module.get<DepartementsService>(DepartementsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
