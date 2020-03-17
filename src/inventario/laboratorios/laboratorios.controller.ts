import { Controller } from '@nestjs/common';
import { InventarioController } from 'src/shared/Inventario.controller';
import { LaboratorioDTO, Laboratorio } from './laboratorio.schema';
import { LaboratoriosService } from './laboratorios.service';

@Controller('laboratorios')
export class LaboratoriosController extends InventarioController<LaboratorioDTO, Laboratorio, LaboratoriosService>{

    constructor(private laboratoriosService: LaboratoriosService){
        super(laboratoriosService);
    }
}
