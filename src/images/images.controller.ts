import { Controller, Get, Param, Body, NotFoundException, Post, Put } from '@nestjs/common';
import { ImagesService } from './images.service'
import { ImageDTO, Image } from './image.schema'
import { InventarioController } from 'src/shared/Inventario.controller'

@Controller('images')
export class ImagesController{
    constructor(private imagesService: ImagesService){
        
    }

    @Get(":name")
    async getByName(@Param('name') name : string) {
        const img = await this.imagesService.getByName(name);
        if (!img) {
            throw new NotFoundException('Object does not exist!');
        }
        return img;
    }

    @Post()
    async add(@Body() dto: ImageDTO){
        return await this.imagesService.add(dto);
    }

    @Put(":name")
    async edit(@Param('name') name : string, @Body() dto: ImageDTO){
        const editedImage = await this.imagesService.edit(name, dto);
        if (!editedImage) {
            this.add(dto);
        }
        return editedImage;
    }
}
