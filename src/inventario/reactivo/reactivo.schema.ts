import * as mongoose from 'mongoose';

export const ReactivoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo_barras: { type: String, required: true },
    fotografia: { type: String, required: true },
    descripcion: { type: String, required: true },
    marca: { type: String, required: true },
    identificacion_interna: { type: String, required: true },
    fecha_adquisicion: { type: String, required: true },
    hoja_seguridad: { type: String, required: true },
    almacen: { type: String, required: true },
    ubicacion: { type: String, required: true },
    proveedor: { type: String, required: true },
    cantidad: { type: Number, required: true },
    observaciones: { type: String, required: true },
});

export interface Reactivo extends mongoose.Document {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly descripcion: String;
    readonly marca: String;
    readonly identificacion_interna: String;
    readonly fecha_adquisicion: String;
    readonly hoja_seguridad: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
  }


export class ReactivoDTO  {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly descripcion: String;
    readonly marca: String;
    readonly identificacion_interna: String;
    readonly fecha_adquisicion: String;
    readonly hoja_seguridad: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
}
  