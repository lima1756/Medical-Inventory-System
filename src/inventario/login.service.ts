import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
dotenv.config();

@Injectable()
export class LoginService {
 
    async login(user: string, pass: string): Promise<string> {
        if(user == process.env.PLATFORM_USER && pass == process.env.PLATFORM_PASSWORD) {
            return jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (3600 * 8760),
                id: user
            }, process.env.JWT_SECRET)   
        }
        return null
    }

}
