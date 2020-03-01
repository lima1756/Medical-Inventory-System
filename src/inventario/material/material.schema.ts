import * as mongoose from 'mongoose';

export const MaterialSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo_barras: { type: String, required: true },
    fotografia: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    especificaciones: { type: String, required: true },
    identificacion: { type: String, required: true },
    almacen: { type: String, required: true },
    ubicacion: { type: String, required: true },
    proveedor: { type: String, required: true },
    cantidad: { type: Number, required: true },
    observaciones: { type: String, required: true },
});

export interface Material extends mongoose.Document {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly marca: String;
    readonly modelo: String;
    readonly especificaciones: String;
    readonly identificacion: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
  }


export class MaterialDTO  {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly marca: String;
    readonly modelo: String;
    readonly especificaciones: String;
    readonly identificacion: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
}
  