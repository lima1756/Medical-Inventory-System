import { Controller } from '@nestjs/common';
import { InventarioCController } from 'src/shared/InventarioC.controller';
import { ReactivoDTO, Reactivo } from './reactivo.schema';
import { ReactivoService } from './reactivo.service';

@Controller('inventario/reactivos')
export class ReactivoController extends InventarioCController<ReactivoDTO, Reactivo, ReactivoService> {
    constructor(private reactivoService: ReactivoService){
        super(reactivoService);
    }
}
