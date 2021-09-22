import {Controller, Request, Get, Post, UseGuards, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalAuthGuard} from "./local-auth.guard";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {User, UsersService} from "./users/users.service";
import {Article} from "../article/article.entity";

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private userService:UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    console.log(req.user)
   return this.authService.login(req.user);
  }

  @Post('signup')
  signUp(@Body() user: User): any {

    return this.userService.addOne(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(): string {
    return this.authService.getHello();
  }
}
