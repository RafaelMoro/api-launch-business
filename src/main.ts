import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GeneralAppExceptionFilter } from './exceptions/GeneralExceptionFilter.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GeneralAppExceptionFilter());
  await app.listen(process.env.PORT ?? 6060);
}
bootstrap();
