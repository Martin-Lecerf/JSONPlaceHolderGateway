import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersMapper } from './usersMapper';

@Module({
  providers: [UsersService, UsersMapper],
  controllers: [UsersController],
})
export class UsersModule {}
