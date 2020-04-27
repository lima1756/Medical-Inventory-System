import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    Logger.debug(req.path);
    next();
  }
}
