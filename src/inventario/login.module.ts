import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LaboratoriosModule } from './laboratorios/laboratorios.module';

@Module({
  imports: [  LaboratoriosModule],
  providers: [LoginService],
  controllers: [LoginController]
})

export class LoginModule {}
