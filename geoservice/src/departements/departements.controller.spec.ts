import { Test, TestingModule } from '@nestjs/testing';
import { DepartementsController } from './departements.controller';
import { DepartementRepository } from './departement.repository';
import { DepartementsService } from './departements.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Departement } from './departement.entity';

describe('Departements Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DepartementsController],
      providers: [
        DepartementsService,
        {
          provide: getRepositoryToken(Departement),
          useClass: DepartementRepository
        }
      ]
    }).compile();
  });
  it('should be defined', () => {
    const controller: DepartementsController = module.get<DepartementsController>(DepartementsController);
    expect(controller).toBeDefined();
  });
});
