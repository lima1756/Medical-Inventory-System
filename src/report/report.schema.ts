import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    type: { type: String, required: true },
    action: { type: String, required: true },
    reason: { type: String, required: true },
});

export interface Report extends mongoose.Document {
    readonly date: Date;
    readonly type: String;
    readonly action: String;
    readonly reason: String;
}


export class ReportDTO {
    readonly date: Date;
    readonly type: String;
    readonly action: String;
    readonly reason: String;
}
