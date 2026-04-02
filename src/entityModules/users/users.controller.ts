import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './User';
import { UserDTOOut } from './DTO/userDTOOut';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<UserDTOOut[]> {
    return this.usersService.findAll();
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<UserDTOOut> {
    return this.usersService.findById(id);
  }
}
