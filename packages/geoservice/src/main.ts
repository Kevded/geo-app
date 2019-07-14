import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        // error constraint in prod
        // disableErrorMessages: process.env.NODE_ENV === 'production' ? true : false
    }));
    if (!(process.env.NODE_ENV === 'production')) 
    {
        app.enableCors();
    }
    
    
    const options = new DocumentBuilder()
    .setTitle('Geoservice API')
    .setDescription('The geoservice API description')
    .setVersion('1.0')
    //.addTag('geoservice')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger-ui', app, document);
    
    app.useStaticAssets(join(__dirname, 'public'));
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
