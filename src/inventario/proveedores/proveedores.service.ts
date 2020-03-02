import { Injectable } from '@nestjs/common';
import { InventarioService } from 'src/shared/Inventario.service';
import { Proveedores, ProveedoresDTO } from './proveedores.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class ProveedoresService extends InventarioService<Proveedores, ProveedoresDTO>{
    constructor(@InjectModel('Proveedores') private readonly proveedoresModel: Model<Proveedores>) {
        super(proveedoresModel);
    }
}
