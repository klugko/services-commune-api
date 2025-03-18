
import { NestFactory } from '@nestjs/core';
import { ServicesModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(ServicesModule);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Services Communales')
    .setDescription('The services API description')
    .setVersion('1.0')
    .addTag('services')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.APP_PORT ?? 3000);
  
  console.log('app port :', process.env.APP_PORT)
}
bootstrap();