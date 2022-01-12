import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponseDto } from 'common/dtos';
import { PizzaService } from './pizza.service';

@Controller('pizza')
export class PizzaController {
  constructor(private readonly pizzaService: PizzaService) {}

  @Get()
  async getPizzas() {
    try {
      const result = await this.pizzaService.getPizzas();
      return ApiResponseDto.successWithData(result);
    } catch {
      return ApiResponseDto.errorResponse(
        'There was a problem with the server',
        500,
      );
      // + Error Log
    }
  }

  @Get(':id')
  async getPizza(@Param('id') id: number) {
    try {
      const result = await this.pizzaService.getPizza(id);
      if (!result) {
        return ApiResponseDto.errorResponse('There is no such pizza!', 404);
      }
      return ApiResponseDto.successWithData(result);
    } catch {
      return ApiResponseDto.errorResponse(
        'There was a problem with the server',
        500,
      );
      // + Error Log
    }
  }
}
