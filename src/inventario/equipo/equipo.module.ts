import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { EquipoController } from './equipo.controller';
import { EquipoService } from './equipo.service';
import { EquipoSchema } from './equipo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthenticationMiddleware } from '../../shared/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Equipo', schema: EquipoSchema }]),
  ],
  controllers: [EquipoController],
  providers: [EquipoService]
})

export class EquipoModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/inventario/equipo' },
      { method: RequestMethod.PUT, path: '/inventario/equipo' },
      { method: RequestMethod.DELETE, path: '/inventario/equipo' }
    )
  }
}