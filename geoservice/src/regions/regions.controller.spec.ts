import { Test, TestingModule } from '@nestjs/testing';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Region } from './region.entity';
import { RegionRepository } from "./region.repository";

describe('Regions Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RegionsController],
      providers: [
        RegionsService,
        {
          provide: getRepositoryToken(Region),
          useClass: RegionRepository
        }
      ]
    }).compile();
  });
  it('should be defined', () => {
    const controller: RegionsController = module.get<RegionsController>(RegionsController);
    expect(controller).toBeDefined();
  });
});
