import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'order/entities';
import { EntityManager, EntityRepository, Repository } from 'typeorm';

@EntityRepository(OrderEntity)
@Injectable()
export default class OrderRepository extends Repository<OrderEntity> {
  constructor(private readonly entityManager: EntityManager) {
    super();
  }

  async getOrders(): Promise<OrderEntity[]> {
    return await this.find({
      relations: [
        'orderItems',
        'orderItems.pizza',
        'orderItems.pizza.ingredients',
      ],
    });
  }

  async getOrder(orderId: number): Promise<OrderEntity> {
    return await this.findOne(orderId, {
      relations: [
        'orderItems',
        'orderItems.pizza',
        'orderItems.pizza.ingredients',
      ],
    });
  }
}
