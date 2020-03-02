import { Test, TestingModule } from '@nestjs/testing';
import { ConsumiblesController } from './consumibles.controller';

describe('Consumibles Controller', () => {
  let controller: ConsumiblesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumiblesController],
    }).compile();

    controller = module.get<ConsumiblesController>(ConsumiblesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
