import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
});

export interface Image extends mongoose.Document {
    readonly name: String;
    readonly url: String;
  }


export class ImageDTO  {
    readonly name: String;
    readonly url: String;
}
  