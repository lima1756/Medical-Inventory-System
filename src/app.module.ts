import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialModule } from './inventario/material/material.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/medical-inventory', { useNewUrlParse: true}),
    MaterialModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
