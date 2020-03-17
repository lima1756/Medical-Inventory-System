import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ImagesService } from './images.service'
import { ImageDTO, Image } from './image.schema'
import { InventarioController } from 'src/shared/Inventario.controller'

@Controller('images')
export class ImagesController extends InventarioController<ImageDTO, Image, ImagesService>{
    constructor(private imagesService: ImagesService){
        super(imagesService);
    }

    @Get("name/:name")
    async getByName(@Param('name') name : String) {
        const material = await this.imagesService.getByName(name);
        if (!material) {
            throw new NotFoundException('Object does not exist!');
        }
        return material;
    }
}
