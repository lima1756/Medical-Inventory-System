import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConsumiblesController } from './consumibles.controller';
import { ConsumiblesService } from './consumibles.service';
import { ConsumiblesSchema } from './consumibles.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationMiddleware } from '../../shared/authentication.middleware';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Consumibles', schema: ConsumiblesSchema }]),
  ],
  controllers: [ConsumiblesController],
  providers: [ConsumiblesService]
})

export class ConsumiblesModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/inventario/consumibles' },
      { method: RequestMethod.PUT, path: '/inventario/consumibles' },
      { method: RequestMethod.DELETE, path: '/inventario/consumibles' }
    )
  }
}
