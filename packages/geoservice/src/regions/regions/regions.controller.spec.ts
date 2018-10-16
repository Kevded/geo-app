import { Test, TestingModule } from '@nestjs/testing';
import { RegionsController } from './regions.controller';

describe('Regions Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RegionsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: RegionsController = module.get<RegionsController>(RegionsController);
    expect(controller).toBeDefined();
  });
});
