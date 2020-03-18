import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { ImageSchema } from './image.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Image', schema: ImageSchema }]),
  ],
  providers: [ImagesService],
  controllers: [ImagesController]
})
export class ImagesModule {}
