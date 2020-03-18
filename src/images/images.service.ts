import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Image, ImageDTO } from './image.schema';
import { InventarioService } from 'src/shared/Inventario.service'


export class ImagesService extends InventarioService<Image, ImageDTO>{
    constructor(@InjectModel('Image') private readonly imageModel: Model<Image>) {
        super(imageModel);
    }

    async getByName(name): Promise<Image> {
        const obj = await this.imageModel.find({name:name}).exec();
        return obj[0];
    }
}
