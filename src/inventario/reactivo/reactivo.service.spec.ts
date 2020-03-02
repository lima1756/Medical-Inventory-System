import { Test, TestingModule } from '@nestjs/testing';
import { ReactivoService } from './reactivo.service';

describe('ReactivoService', () => {
  let service: ReactivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReactivoService],
    }).compile();

    service = module.get<ReactivoService>(ReactivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
