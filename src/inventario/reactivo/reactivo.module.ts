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
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/inventario/reactivo' },
      { method: RequestMethod.PUT, path: '/inventario/reactivo' },
      { method: RequestMethod.DELETE, path: '/inventario/reactivo' }
    )
  }
}
