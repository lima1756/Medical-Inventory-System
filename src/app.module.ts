import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialModule } from './inventario/material/material.module';
import { EquipoModule } from './inventario/equipo/equipo.module';
import { ProveedoresModule } from './inventario/proveedores/proveedores.module';
import { LoginModule } from './login/login.module';
import { ConsumiblesModule } from './inventario/consumibles/consumibles.module';
import { ReactivoModule } from './inventario/reactivo/reactivo.module';
import { ImagesModule } from './images/images.module';
import { LaboratoriosModule } from './inventario/laboratorios/laboratorios.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/medical-inventory', { useNewUrlParse: true}),
    MaterialModule, ProveedoresModule, LoginModule, ConsumiblesModule,
    EquipoModule, ReactivoModule, ImagesModule, LaboratoriosModule, ReportModule
  ]
})
export class AppModule {}
