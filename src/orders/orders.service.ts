import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private repo: Repository<Order>
  ) {}
  
  async create(data: any) {
    const order = this.repo.create({
      userId: data?.userId || '1',
      productId: data.productId,
      total: Number(data.total) || 0,
      quantity: Number(data.quantity) || 1,
      status: 'completed',
    });
    await this.repo.save(order);
    console.log('✅ orden guardada en service', order.id);
  }
  
}