import { Model, Document } from 'mongoose';
import { InventarioService } from './Inventario.service'

export class InventarioCService<Type extends Document, DTO>  extends InventarioService<Type, DTO>{

    constructor(private readonly objCModel: Model<Type>) {
        super(objCModel);
    }

    async editQuantity(id, quantity: Number): Promise<Type> {
        const obj = await this.objCModel.findById(id).exec();
        obj.set("cantidad", quantity);
        return await obj.save();
    }
}


