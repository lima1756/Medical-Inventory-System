import { Post, Body, Get, Param, NotFoundException, Put, Delete,Logger } from '@nestjs/common';
import { InventarioService } from './Inventario.service';
import { ValidateObjectId } from './validate-object-id.pipes'
import { Document } from 'mongoose';

export class InventarioController <DTO, Type extends Document, Service extends InventarioService<Type, DTO>> {
    
    constructor(private service: Service){}

    @Post()
    async add(@Body() dto: DTO){
        Logger.debug("TODO controllador");
        return await this.service.add(dto);
    }

    @Get()
    async get(){
        return await this.service.get();
    }

    @Get(":id")
    async getOne(@Param('id', new ValidateObjectId()) id) {
        const material = await this.service.getOne(id);
        if (!material) {
            throw new NotFoundException('Object does not exist!');
        }
        return material;
    }

    @Put(":id")
    async edit(@Param('id', new ValidateObjectId()) id, @Body() dto: DTO){
        const editedMaterial = await this.service.edit(id, dto);
        if (!editedMaterial) {
            throw new NotFoundException('Object does not exist!');
        }
        return editedMaterial;
    }

    @Delete(":id")
    async delete(@Param('id', new ValidateObjectId()) id){
        const deletedMaterial = await this.service.delete(id);
        if (!deletedMaterial) {
            throw new NotFoundException('Object does not exist!');
        }
        return deletedMaterial;
    }
}
