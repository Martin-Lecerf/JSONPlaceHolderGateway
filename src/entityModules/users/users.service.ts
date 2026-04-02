import { Injectable } from '@nestjs/common';
import { HttpService } from '../../common/http/http.service';
import { User } from './User';
import { BaseCrudService } from 'src/abstracts/BaseCrudService.service';
import { UserDTOIn } from './DTO/userDTOIn';
import { UserDTOOut } from './DTO/userDTOOut';
import { UsersMapper } from './usersMapper';

@Injectable()
export class UsersService extends BaseCrudService<User, UserDTOIn, UserDTOOut> {
  constructor(http: HttpService, mapper: UsersMapper) {
    super(http, mapper, '/users');
  }
}
