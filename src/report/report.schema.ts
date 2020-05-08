import * as mongoose from 'mongoose';

export const ReportSchema = new mongoose.Schema({
    date: { type: Date, required: false, default: () => new Date() },
    object: {type: mongoose.Schema.Types.Mixed, required: true},
    type: { type: String, required: true },
    action: { type: String, required: true },
    reason: { type: String, required: true },
});

export interface Report extends mongoose.Document {
    readonly date: Date;
    readonly object: any;
    readonly type: String;
    readonly action: String;
    readonly reason: String;
}


export class ReportDTO {
    readonly date: Date;
    readonly object: any;
    readonly type: String;
    readonly action: String;
    readonly reason: String;
}
