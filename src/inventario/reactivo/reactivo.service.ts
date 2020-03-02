import { Injectable } from '@nestjs/common';
import { InventarioCService } from 'src/shared/InventarioC.service';
import { ReactivoDTO, Reactivo } from './reactivo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ReactivoService extends InventarioCService<Reactivo, ReactivoDTO>{
    constructor(@InjectModel('Reactivo') private readonly reactivoModel: Model<Reactivo>) {
        super(reactivoModel);
    }
}
