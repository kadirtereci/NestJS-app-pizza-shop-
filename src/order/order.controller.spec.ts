import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrderEntity } from './entities';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        OrderService,
        {
          provide: getRepositoryToken(OrderEntity),
          useValue: {
            getOrders: jest.fn().mockResolvedValue([new OrderEntity()]),
            getOrder: jest
              .fn()
              .mockImplementation((id: number) =>
                Promise.resolve(new OrderEntity()),
              ),
          },
        },
      ],
    }).compile();

    controller = await module.get(OrderController);
    service = await module.get(OrderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
