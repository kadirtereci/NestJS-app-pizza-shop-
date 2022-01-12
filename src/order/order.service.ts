import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entities';
import { OrderRepository } from './repositories';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: OrderRepository,
  ) {}

  async getOrders() {
    return await this.orderRepository.getOrders();
  }

  async getOrder(orderId: number) {
    return await this.orderRepository.getOrder(orderId);
  }
}
