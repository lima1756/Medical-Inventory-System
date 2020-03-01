import { Post, Body, Get, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { InventarioService } from './Inventario.service';
import { ValidateObjectId } from './validate-object-id.pipes'
import { Document } from 'mongoose';
import { InventarioController } from './Inventario.controller';

export class InventarioCController <DTO, Type extends Document, Service extends InventarioService<Type, DTO>> extends InventarioController<DTO, Type, Service>{
    
    constructor(private serviceC: Service){
        super(serviceC);
    }

    @Put("quantity/:id")
    async editQuantity(@Param('id', new ValidateObjectId()) id, @Body('quantity') quantity: Number){
        const editedMaterial = await this.serviceC.editQuantity(id, quantity);
        if (!editedMaterial) {
            throw new NotFoundException('Object does not exist!');
        }
        return editedMaterial;
    }

}
