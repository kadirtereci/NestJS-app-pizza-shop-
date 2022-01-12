import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponseDto } from 'common/dtos';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders() {
    try {
      const result = await this.orderService.getOrders();
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
  async getOrder(@Param('id') id: number) {
    try {
      const result = await this.orderService.getOrder(id);
      if (!result) {
        return ApiResponseDto.errorResponse('There is no such order!', 404);
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
