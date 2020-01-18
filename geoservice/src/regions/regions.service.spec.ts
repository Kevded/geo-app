import { Test, TestingModule } from '@nestjs/testing';
import { RegionsService } from './regions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Region } from './region.entity';
import { RegionRepository } from "./region.repository";

describe('RegionsService', () => {
  let service: RegionsService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegionsService,
        {
          provide: getRepositoryToken(Region),
          useClass: RegionRepository
        }
      ],
    }).compile();
    service = module.get<RegionsService>(RegionsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
