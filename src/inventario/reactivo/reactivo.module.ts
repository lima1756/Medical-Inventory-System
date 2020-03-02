import { Module } from '@nestjs/common';
import { ReactivoService } from './reactivo.service';
import { ReactivoController } from './reactivo.controller';
import { ReactivoSchema } from './reactivo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reactivo', schema: ReactivoSchema }]),
  ],
  providers: [ReactivoService],
  controllers: [ReactivoController]
})
export class ReactivoModule {}
