import { InventarioCService } from 'src/shared/InventarioC.service';
import { EquipoDTO, Equipo } from './equipo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class EquipoService extends InventarioCService<Equipo, EquipoDTO>{
    constructor(@InjectModel('Equipo') private readonly equipoModel: Model<Equipo>) {
        super(equipoModel);
    }
}
