import { Controller } from '@nestjs/common';
import { InventarioCController } from 'src/shared/InventarioC.controller';
import { ConsumiblesService } from './consumibles.service';
import { ConsumiblesDTO, Consumibles } from './consumibles.schema';

@Controller('inventario/consumibles')
export class ConsumiblesController extends InventarioCController<ConsumiblesDTO, Consumibles, ConsumiblesService>{
    constructor(private consumibleService: ConsumiblesService){
        super(consumibleService);
    }
}
