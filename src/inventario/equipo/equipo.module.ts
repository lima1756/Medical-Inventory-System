import { Module } from '@nestjs/common';
import { EquipoController } from './equipo.controller';
import { EquipoService } from './equipo.service';
import { EquipoSchema } from './equipo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Equipo', schema: EquipoSchema }]),
  ],
  controllers: [EquipoController],
  providers: [EquipoService]
})
export class EquipoModule {}
