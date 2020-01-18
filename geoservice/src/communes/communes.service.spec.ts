import { Test, TestingModule } from '@nestjs/testing';
import { CommunesService } from './communes.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Commune } from './commune.entity';
import { CommuneRepository } from "./commune.repository";

describe('CommunesService', () => {
  let service: CommunesService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommunesService,
        {
          provide: getRepositoryToken(Commune),
          useClass: CommuneRepository
        }],
    }).compile();
    service = module.get<CommunesService>(CommunesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
