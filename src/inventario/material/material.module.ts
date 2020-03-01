import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { MaterialSchema } from './material.schema'; // and this

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Material', schema: MaterialSchema }]),
  ],
  controllers: [MaterialController],
  providers: [MaterialService]
})
export class MaterialModule {}
