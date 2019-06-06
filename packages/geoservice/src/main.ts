import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        // error constraint in prod
        // disableErrorMessages: process.env.NODE_ENV === 'production' ? true : false
    }));
    app.useStaticAssets(join(__dirname, 'public'));
    if (!(process.env.NODE_ENV === 'production')) app.enableCors();
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
