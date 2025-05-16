import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GeneralAppExceptionFilter } from './exceptions/GeneralExceptionFilter.filter';

const frontendUri = process.env.FRONTEND_URI;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GeneralAppExceptionFilter());
  app.enableCors({
    origin: [frontendUri],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(process.env.PORT ?? 6060);
}
bootstrap();
