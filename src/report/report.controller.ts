import { Controller, Post, Body, Get } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportDTO } from './report.schema';

@Controller('report')
export class ReportController {
    constructor(private reportService: ReportService){}

    @Get()
    async get(){
        return await this.reportService.get();
    }

    @Post()
    async add(@Body() dto: ReportDTO){
        return await this.reportService.add(dto);
    }
}
