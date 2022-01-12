import { Module } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzaRepository } from './repositories';

@Module({
  providers: [PizzaService],
  controllers: [PizzaController],
  imports: [TypeOrmModule.forFeature([PizzaRepository])],
})
export class PizzaModule {}
