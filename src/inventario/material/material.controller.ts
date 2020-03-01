import { Controller } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialDTO, Material } from './material.schema';
import { InventarioCController } from 'src/shared/InventarioC.controller';

@Controller('inventario/material')
export class MaterialController extends InventarioCController<MaterialDTO, Material, MaterialService> {
    
    constructor(private materialService: MaterialService){
        super(materialService);
    }

    
}
