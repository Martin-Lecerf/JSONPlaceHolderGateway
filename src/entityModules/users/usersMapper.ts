import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { UserDTOIn } from './DTO/userDTOIn';
import { UserDTOOut } from './DTO/userDTOOut';
import { User } from './User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersMapper implements IBaseCrudMapper<
  User,
  UserDTOIn,
  UserDTOOut
> {
  fromDTO(dtoIn: UserDTOIn, id?: number): User {
    return {
      id: id ?? 0,
      name: dtoIn.name,
      email: dtoIn.email,
      username: '',
      address: {} as any,
      phone: '',
      website: '',
      company: {} as any,
    };
  }

  toDTO(entity: User): UserDTOOut {
    return {
      name: entity.name,
      username: entity.username,
      email: entity.email,
      phone: entity.phone,
    };
  }
}
