import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PizzaEntity } from './entities';
import { PizzaService } from './pizza.service';

describe('PizzaService', () => {
  let service: PizzaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PizzaService,
        {
          provide: getRepositoryToken(PizzaEntity),
          useValue: {
            getPizzas: jest.fn().mockImplementation(() => {
              Promise.resolve([new PizzaEntity()]);
            }),
            getPizza: jest.fn().mockImplementation(() => {
              Promise.resolve(new PizzaEntity());
            }),
          },
        },
      ],
    }).compile();

    service = module.get<PizzaService>(PizzaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
