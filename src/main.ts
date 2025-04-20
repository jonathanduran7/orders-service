import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:secret123@rabbit:5672'],
      queue: 'orders_queue',
      queueOptions: { durable: true },
    },
  });
  await app.listen();
  console.log('🟢 orders‑service listo');
}
bootstrap();