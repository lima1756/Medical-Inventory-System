import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const token = req.get("token") || req.body.token;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            const status = err.status || 500;
            const message = err.message || 'Sorry we were unable to process your request.';
            return res.status(status).send({
                message,
            });
        }
        next();
    });
  }
}
