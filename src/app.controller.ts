import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/auth/local-auth.guard';
import { JwtAuthGuard } from './auth/auth/jwt-auth.guard';
import { Roles } from './auth/roles.decorator';
import { Role } from './enums/role.enum';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Get('us')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  findAll(@Request() req) {
    return req.user;
    // return this.tasksService.findAll();
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
