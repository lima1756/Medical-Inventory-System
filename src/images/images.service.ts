import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Image, ImageDTO } from './image.schema';
import { InventarioService } from 'src/shared/Inventario.service'
import { Logger } from '@nestjs/common';


export class ImagesService extends InventarioService<Image, ImageDTO>{
    constructor(@InjectModel('Image') private readonly imageModel: Model<Image>) {
        super(imageModel);
    }

    async getByName(name): Promise<Image> {
        const obj = await this.imageModel.find({name:name}).exec();
        return obj[0];
    }

    
    async add(dto: ImageDTO): Promise<Image> {
        const obj = new this.imageModel(dto);
        return await obj.save();
    }

    async edit(name: string, dto: ImageDTO): Promise<Image> {
        Logger.debug(dto);
        const obj = await this.imageModel.findOneAndUpdate({"name":name}, dto,{new: true});
        return obj;
    }
}
