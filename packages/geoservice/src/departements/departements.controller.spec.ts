import { Test, TestingModule } from '@nestjs/testing';
import { DepartementsController } from './departements.controller';

describe('Departements Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [DepartementsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: DepartementsController = module.get<DepartementsController>(DepartementsController);
    expect(controller).toBeDefined();
  });
});
