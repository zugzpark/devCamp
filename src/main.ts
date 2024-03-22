import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './utils/swagger/swagger';
import { HttpExceptionFilter } from './common';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  // initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(new HttpExceptionFilter());

  // app.enableCors({
  //   credentials: true,
  // });

  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
