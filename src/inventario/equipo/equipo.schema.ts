import * as mongoose from 'mongoose';

export const EquipoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    codigo_barras: { type: String, required: true },
    fotografia: { type: String, required: true },
    descripcion: { type: String, required: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    serie: { type: String, required: true },
    inventario_tec: { type: String, required: true },
    identificacion_interna: { type: String, required: true },
    fecha_adquisicion: { type: String, required: true },
    almacen: { type: String, required: true },
    ubicacion: { type: String, required: true },
    manual: { type: String, required: true },
    pno: { type: String, required: true },
    mantenimiento: { type: String, required: true },
    proveedor: { type: String, required: true },
    cantidad: { type: Number, required: true },
    observaciones: { type: String, required: true },
});

export interface Equipo extends mongoose.Document {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly descripcion: String;
    readonly marca: String;
    readonly modelo: String;
    readonly serie: String;
    readonly inventario_tec: String;
    readonly identificacion_interna: String;
    readonly fecha_adquisicion: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly manual: String;
    readonly pno: String;
    readonly mantenimiento: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
  }


export class EquipoDTO  {
    readonly nombre: String;
    readonly codigo_barras: String;
    readonly fotografia: String;
    readonly descripcion: String;
    readonly marca: String;
    readonly modelo: String;
    readonly serie: String;
    readonly inventario_tec: String;
    readonly identificacion_interna: String;
    readonly fecha_adquisicion: String;
    readonly almacen: String;
    readonly ubicacion: String;
    readonly manual: String;
    readonly pno: String;
    readonly mantenimiento: String;
    readonly proveedor: String;
    readonly cantidad: Number;
    readonly observaciones: String;
}
  


