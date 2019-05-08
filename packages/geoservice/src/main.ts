import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        // error constraint in prod
        // disableErrorMessages: process.env.NODE_ENV === 'production' ? true : false
    }));
    app.useStaticAssets(join(__dirname, 'public'));
    if (!(process.env.NODE_ENV === 'production')) app.enableCors();
    await app.listen(process.env.PORT);
}
bootstrap();
