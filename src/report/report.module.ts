import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { ReportSchema } from './report.schema';
import { AuthenticationMiddleware } from '../shared/authentication.middleware';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Report', schema: ReportSchema }]),
    ],
    controllers: [ReportController],
    providers: [ReportService]
})

export class ReportModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(AuthenticationMiddleware)
        .exclude({ method: RequestMethod.GET, path: "/report"})
        .forRoutes(ReportController)
    }
}