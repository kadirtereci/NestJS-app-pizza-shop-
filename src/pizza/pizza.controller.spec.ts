import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ApiResponseDto } from 'common/dtos';
import { PizzaEntity } from './entities';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';

const pizza1: PizzaEntity = {
  id: 1,
  name: 'Some pizza',
  ingredients: [
    {
      id: 1,
      name: 'Tomato',
    },
    {
      id: 2,
      name: 'Pepperoni',
    },
  ],
  price: 5,
};
const pizza2: PizzaEntity = {
  id: 2,
  name: 'Some other pizza',
  ingredients: [
    {
      id: 1,
      name: 'Tomato',
    },
    {
      id: 2,
      name: 'Pepperoni',
    },
    {
      id: 3,
      name: 'Mushrooms',
    },
  ],
  price: 5,
};

describe('PizzaController', () => {
  let controller: PizzaController;
  let service: PizzaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzaController],
      providers: [
        PizzaService,
        {
          provide: getRepositoryToken(PizzaEntity),
          useValue: {
            getPizzas: jest
              .fn()
              .mockResolvedValue(
                ApiResponseDto.successWithData([pizza1, pizza2]),
              ),
            getPizza: jest
              .fn()
              .mockImplementation((id: number) =>
                Promise.resolve(
                  id === 1 ? pizza1 : id === 2 ? pizza2 : undefined,
                ),
              ),
          },
        },
      ],
    }).compile();

    controller = await module.get(PizzaController);
    service = await module.get(PizzaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('When someone wants the menu', () => {
    describe('Gets the menu', () => {
      it('should get the menu', async () => {
        jest
          .spyOn(controller, 'getPizzas')
          .mockResolvedValue(ApiResponseDto.successWithData([pizza2]));
      });
    });
  });

  describe('When someone selects a pizza', () => {
    describe('if the pizza is there', () => {
      it('should return the pizza', async () => {
        await expect(controller.getPizza(1)).resolves.toMatchObject(
          ApiResponseDto.successWithData(pizza1),
        );
        const result = jest
          .spyOn(service, 'getPizza')
          .mockResolvedValueOnce(pizza1);
        await expect(controller.getPizza(2)).resolves.toMatchObject(
          ApiResponseDto.successWithData(pizza1),
        );
        expect(result).toBeCalledWith(2);
      });
    });
  });
});
