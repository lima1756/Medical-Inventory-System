import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { ImageSchema } from './image.schema';
import { AuthenticationMiddleware } from '../shared/authentication.middleware';
import { TestMiddleware } from '../shared/test.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Image', schema: ImageSchema }]),
  ],
  providers: [ImagesService],
  controllers: [ImagesController]
})


export class ImagesModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(TestMiddleware, AuthenticationMiddleware)
    .exclude(
      { path: '/images', method: RequestMethod.GET },
      { path: '/images/:name', method: RequestMethod.GET },
    )
    .forRoutes(ImagesController)
  }
}