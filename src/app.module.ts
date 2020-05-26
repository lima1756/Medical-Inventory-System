import { Module } from '@nestjs/common';
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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://'+(process.env.MONGO_HOST || 'localhost')+':'
      +(process.env.MONGO_PORT || '27017') +'/' + (process.env.MONGO_DOCUMENT||'medical-inventory'), { useNewUrlParse: true}),
    MaterialModule, ProveedoresModule, LoginModule, ConsumiblesModule,
    EquipoModule, ReactivoModule, ImagesModule, LaboratoriosModule, ReportModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public')
    })
  ]
})
export class AppModule {}
