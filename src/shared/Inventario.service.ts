import { Injectable, Logger } from '@nestjs/common';
import { Model, Document } from 'mongoose';

@Injectable()
export class InventarioService<Type extends Document, DTO> {
    
    constructor(private readonly objModel: Model<Type>) {
    }

    async add(materialDTO: DTO): Promise<Type> {
        const obj = new this.objModel(materialDTO);
        return await obj.save();
    }

    async getOne(id): Promise<Type> {
        const obj = await this.objModel.findById(id).exec();
        return obj;
    }

    async get(): Promise<Type[]> {
        const obj = await this.objModel.find().exec();
        return obj;
    }

    async edit(id, materialDTO: DTO): Promise<Type> {
        const obj = await this.objModel.findByIdAndUpdate(id, materialDTO, {new: true});
        return obj;
    }

    async editQuantity(id, quantity: Number): Promise<Type> {
        const obj = await this.objModel.findById(id).exec();
        obj.set("cantidad", quantity);
        return await obj.save();
    }

    async delete(id): Promise<Type> {
        const obj = await this.objModel.findByIdAndDelete(id);
        return obj;
    }
}
