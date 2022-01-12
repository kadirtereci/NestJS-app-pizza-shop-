import { PizzaEntity } from 'pizza/entities';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { OrderEntity } from '.';

@Entity('order_items')
export default class OrderItemEntity {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  pizzaId: number;

  @Column()
  quantity: number;

  @Column()
  unitPrice: number;

  @ManyToOne(() => PizzaEntity)
  pizza: PizzaEntity;

  @ManyToOne(() => OrderEntity)
  order: OrderEntity;
}
