import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresController } from './proveedores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresSchema } from './proveedores.schema';
import { AuthenticationMiddleware } from '../../shared/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proveedores', schema: ProveedoresSchema }]),
  ],
  providers: [ProveedoresService],
  controllers: [ProveedoresController]
})

export class ProveedoresModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware)
    .exclude(
      { method: RequestMethod.GET, path: '/proveedores' },
      { method: RequestMethod.GET, path: '/proveedores/:id' },
    )
    .forRoutes(ProveedoresController)
  }
}
