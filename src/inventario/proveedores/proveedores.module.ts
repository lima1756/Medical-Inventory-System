import { Module } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresController } from './proveedores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresSchema } from './proveedores.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Proveedores', schema: ProveedoresSchema }]),
  ],
  providers: [ProveedoresService],
  controllers: [ProveedoresController]
})
export class ProveedoresModule {}
