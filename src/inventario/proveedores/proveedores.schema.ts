import * as mongoose from 'mongoose';

export const ProveedoresSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true },
    servicio: { type: String, required: true },
    marcas: { type: [String], required: true },
    direccion: { type: String, required: true },
    observaciones: { type: String, required: true }
});

export interface Provedoores extends mongoose.Document {
    readonly nombre: String;
    readonly telefono: String;
    readonly correo: String;
    readonly servicio: String;
    readonly marcas: String[];
    readonly direccion: String;
    readonly observaciones: String;
  }


export class ProvedooresDTO  {
    readonly nombre: String;
    readonly telefono: String;
    readonly correo: String;
    readonly servicio: String;
    readonly marcas: String[];
    readonly direccion: String;
    readonly observaciones: String;
}
  