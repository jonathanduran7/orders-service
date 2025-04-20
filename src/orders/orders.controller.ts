import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @EventPattern('order-created')
  async handle(@Payload() data: any) {
    console.log('🔴 order-created', data);
    await this.ordersService.create(data);
  }
}
