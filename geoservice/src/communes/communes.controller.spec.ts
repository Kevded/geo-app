import { Test, TestingModule } from '@nestjs/testing';
import { CommunesController } from './communes.controller';

describe('Communes Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CommunesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CommunesController = module.get<CommunesController>(CommunesController);
    expect(controller).toBeDefined();
  });
});
