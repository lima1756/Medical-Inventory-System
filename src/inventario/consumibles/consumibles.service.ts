import { Injectable } from '@nestjs/common';
import { InventarioCService } from 'src/shared/InventarioC.service';
import { Consumibles, ConsumiblesDTO } from './consumibles.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class ConsumiblesService extends InventarioCService<Consumibles, ConsumiblesDTO>{
    constructor(@InjectModel('Consumibles') private readonly consumiblesModel: Model<Consumibles>) {
        super(consumiblesModel);
    }
}
