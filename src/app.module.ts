import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialModule } from './inventario/material/material.module';
import { EquipoModule } from './inventario/equipo/equipo.module';
import { ProveedoresModule } from './inventario/proveedores/proveedores.module';
import { LoginModule } from './inventario/login.module';
import { ConsumiblesModule } from './inventario/consumibles/consumibles.module';
import { ReactivoModule } from './inventario/reactivo/reactivo.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/medical-inventory', { useNewUrlParse: true}),
    MaterialModule, ProveedoresModule, LoginModule, ConsumiblesModule,
    EquipoModule, ReactivoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
