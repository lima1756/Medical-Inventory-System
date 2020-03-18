import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LaboratoriosService } from './laboratorios.service';
import { LaboratoriosController } from './laboratorios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LaboratorioSchema } from './laboratorio.schema';
import { AuthenticationMiddleware } from 'src/shared/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Laboratorio', schema: LaboratorioSchema}]),
  ],
  providers: [LaboratoriosService],
  controllers: [LaboratoriosController]
})
export class LaboratoriosModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/laboratorios' },
      { method: RequestMethod.PUT, path: '/laboratorios' },
      { method: RequestMethod.DELETE, path: '/laboratorios' }
    )
  }
}

