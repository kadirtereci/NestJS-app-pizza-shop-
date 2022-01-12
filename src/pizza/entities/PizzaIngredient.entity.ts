import { Entity, PrimaryColumn } from 'typeorm';

@Entity('pizza_ingredients')
export default class PizzaIngredientEntity {
  @PrimaryColumn({ name: 'pizza_id' })
  pizzaId: number;

  @PrimaryColumn({ name: 'ingredient_id' })
  ingredientId: number;
}
