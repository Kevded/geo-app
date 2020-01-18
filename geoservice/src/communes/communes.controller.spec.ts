import { Test, TestingModule } from '@nestjs/testing';
import { CommunesController } from './communes.controller';
import { CommunesService } from './communes.service';
import { Commune } from './commune.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CommuneRepository } from './commune.repository';

describe('Communes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CommunesController],
      providers: [
        CommunesService,
        {
          provide: getRepositoryToken(Commune),
          useClass: CommuneRepository
        }
      ]
    }).compile();
  });
  it('should be defined', () => {
    const controller: CommunesController = module.get<CommunesController>(CommunesController);
    expect(controller).toBeDefined();
  });
});
