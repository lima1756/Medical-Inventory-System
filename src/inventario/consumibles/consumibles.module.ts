import { Module } from '@nestjs/common';
import { ConsumiblesController } from './consumibles.controller';
import { ConsumiblesService } from './consumibles.service';
import { ConsumiblesSchema } from './consumibles.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Consumibles', schema: ConsumiblesSchema }]),
  ],
  controllers: [ConsumiblesController],
  providers: [ConsumiblesService]
})
export class ConsumiblesModule {}
