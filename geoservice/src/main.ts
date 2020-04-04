import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    // error constraint in prod
    // disableErrorMessages: process.env.NODE_ENV === 'production' ? true : false
  }));
  if (!(process.env.NODE_ENV === 'production')) {
    app.enableCors();
  }


  //app.useStaticAssets(join(__dirname, 'public'));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
