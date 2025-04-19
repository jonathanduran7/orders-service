import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbit:5672'],
        queue: 'orders_queue',
        queueOptions: { durable: true },
      },
    },
  );
  await app.listen();
  console.log('🟢 orders‑service listo');
}
bootstrap();