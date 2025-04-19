import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) {}

  @EventPattern('order.created')
  async handle(@Payload() data: any) {
    const [order] = this.repo.create({ ...data, total: Number(data.total) });
    await this.repo.save(order);
    console.log('✅ orden guardada', order.id);
  }
}