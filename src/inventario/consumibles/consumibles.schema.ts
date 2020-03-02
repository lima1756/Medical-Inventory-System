import * as mongoose from 'mongoose';

export const ConsumiblesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo_barras: { type: String, required: true },
    fotografia: { type: String, required: true },
    marca: { type: String, required: true },
    especificaciones: { type: String, required: true },
    almacen: { type: String, required: true },
    ubicacion: { type: String, required: true },
    manual: { type: String, required: true },
    hoja_seguridad: { type: String, required: true },
    mantenimiento: { type: String, required: true },
    proveedor: { type: String, required: true },
    cantidad: { type: Number, required: true },
    observaciones: { type: String, required: true },
});

export interface Consumibles extends mongoose.Document {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly marca: String;
    readonly especificaciones: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly manual: String;
    readonly hoja_seguridad: String;
    readonly mantenimiento: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
  }


export class ConsumiblesDTO  {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly marca: String;
    readonly especificaciones: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly manual: String;
    readonly hoja_seguridad: String;
    readonly mantenimiento: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
}
  