import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Material, MaterialDTO } from './material.schema'
import { InventarioCService } from '../../shared/InventarioC.service'

export class MaterialService  extends InventarioCService<Material, MaterialDTO>{

    constructor(@InjectModel('Material') private readonly materialModel: Model<Material>) {
        super(materialModel);
    }

}


