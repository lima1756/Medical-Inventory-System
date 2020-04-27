import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ReactivoService } from './reactivo.service';
import { ReactivoController } from './reactivo.controller';
import { ReactivoSchema } from './reactivo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationMiddleware } from '../../shared/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reactivo', schema: ReactivoSchema }]),
  ],
  providers: [ReactivoService],
  controllers: [ReactivoController]
})

export class ReactivoModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply( AuthenticationMiddleware )
    .exclude(
      { method: RequestMethod.GET, path: '/inventario/reactivos' },
      { method: RequestMethod.GET, path: '/inventario/reactivos/:id' },
    )
    .forRoutes(ReactivoController)
  }
}
