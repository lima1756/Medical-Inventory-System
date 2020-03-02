import { Controller } from '@nestjs/common';
import { InventarioController } from 'src/shared/Inventario.controller';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresDTO, Proveedores } from './proveedores.schema';

@Controller('proveedores')
export class ProveedoresController extends InventarioController<ProveedoresDTO, Proveedores, ProveedoresService>{
    constructor(private proveedoresService: ProveedoresService){
        super(proveedoresService);
    }
}
