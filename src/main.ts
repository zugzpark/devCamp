import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './utils/swagger/swagger';
import { BusinessExceptionFilter } from './common';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new BusinessExceptionFilter());

  // app.enableCors({
  //   credentials: true,
  // });

  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
