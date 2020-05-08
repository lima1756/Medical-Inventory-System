import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Report, ReportDTO } from './report.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReportService {
    constructor(@InjectModel('Report') private readonly objModel: Model<Report>) {
    }

    async get(): Promise<Report[]> {
        const obj = await this.objModel.find().exec();
        return obj;
    }

    async add(dto: ReportDTO): Promise<Report> {
        const obj = new this.objModel(dto);
        return await obj.save();
    }
}
