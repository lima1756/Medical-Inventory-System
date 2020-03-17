import { Controller, Body, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService: LoginService){}

    @Post()
    async login(@Body() user: UserDTO) {
        return  {"token":await this.loginService.login(user.user, user.password)}
    }
}


interface UserDTO{
    user: string;
    password: string;
}