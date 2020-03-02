import { Test, TestingModule } from '@nestjs/testing';
import { ReactivoController } from './reactivo.controller';

describe('Reactivo Controller', () => {
  let controller: ReactivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReactivoController],
    }).compile();

    controller = module.get<ReactivoController>(ReactivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
