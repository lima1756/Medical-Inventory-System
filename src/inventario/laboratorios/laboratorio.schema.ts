import * as mongoose from 'mongoose';

export const LaboratorioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    url: { type: String, required: true }
});

export interface Laboratorio extends mongoose.Document {
    readonly nombre: String;
    readonly url: String;
  }


export class LaboratorioDTO  {
    readonly nombre: String;
    readonly url: String;
}
  