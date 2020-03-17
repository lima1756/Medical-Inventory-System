import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InventarioService } from 'src/shared/Inventario.service';
import { Laboratorio, LaboratorioDTO } from './laboratorio.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LaboratoriosService extends InventarioService<Laboratorio, LaboratorioDTO> {

    constructor(@InjectModel('Laboratorio') private readonly laboratorioModel: Model<Laboratorio>) {
        super(laboratorioModel)
    }
}
