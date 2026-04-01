import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import User from './models/User';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.appService.getUserById(Number(id));
  }
}
