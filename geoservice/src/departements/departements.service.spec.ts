import { Test, TestingModule } from '@nestjs/testing';
import { DepartementsService } from './departements.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Departement } from './departement.entity';
import { DepartementRepository } from "./departement.repository";

describe('DepartementsService', () => {
  let service: DepartementsService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartementsService,
        {
          provide: getRepositoryToken(Departement),
          useClass: DepartementRepository
        }
      ],
    }).compile();
    service = module.get<DepartementsService>(DepartementsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
