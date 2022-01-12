import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PizzaEntity } from '.';

@Entity('ingredients')
export default class IngredientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => PizzaEntity, (pizza) => pizza.ingredients)
  pizzas?: Promise<PizzaEntity[]>;
}
