import { Controller } from '@nestjs/common';
import { InventarioCController } from 'src/shared/InventarioC.controller';
import { EquipoService } from './equipo.service';
import { Equipo, EquipoDTO } from './equipo.schema';

@Controller('inventario/equipo')
export class EquipoController extends InventarioCController<EquipoDTO, Equipo, EquipoService> {
    constructor(private equipoService: EquipoService){
        super(equipoService);
    }
}
