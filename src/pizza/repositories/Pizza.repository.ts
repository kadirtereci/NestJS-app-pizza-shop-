import { Injectable } from '@nestjs/common';
import { PizzaEntity } from 'pizza/entities';
import { EntityManager, EntityRepository, Repository } from 'typeorm';

@EntityRepository(PizzaEntity)
@Injectable()
export default class PizzaRepository extends Repository<PizzaEntity> {
  constructor(private readonly entityManager: EntityManager) {
    super();
  }

  async getPizzas(): Promise<PizzaEntity[]> {
    return await this.find({
      relations: ['ingredients'],
    });
  }

  async getPizza(pizzaId: number): Promise<PizzaEntity> {
    return await this.findOne(pizzaId, {
      relations: ['ingredients'],
    });
  }
}
