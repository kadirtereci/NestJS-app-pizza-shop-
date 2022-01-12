import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IngredientEntity } from '.';

@Entity('pizzas')
export default class PizzaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToMany(
    () => IngredientEntity,
    (pizzaIngredient) => pizzaIngredient.pizzas,
  )
  @JoinTable({
    name: 'pizza_ingredients',
    joinColumn: {
      name: 'pizza_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ingredient_id',
      referencedColumnName: 'id',
    },
  })
  ingredients: IngredientEntity[];
}
