import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PizzaEntity } from './entities';
import { PizzaRepository } from './repositories';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(PizzaEntity)
    private readonly pizzaRepository: PizzaRepository,
  ) {}

  async getPizzas(): Promise<PizzaEntity[]> {
    return await this.pizzaRepository.getPizzas();
  }

  async getPizza(pizzaId: number): Promise<PizzaEntity> {
    return await this.pizzaRepository.getPizza(pizzaId);
  }
}
