import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { MaterialSchema } from './material.schema'; // and this
import { AuthenticationMiddleware } from '../../shared/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Material', schema: MaterialSchema }]),
  ],
  controllers: [MaterialController],
  providers: [MaterialService]
})

export class MaterialModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/inventario/material' },
      { method: RequestMethod.PUT, path: '/inventario/material' },
      { method: RequestMethod.DELETE, path: '/inventario/material' }
    )
  }
}
