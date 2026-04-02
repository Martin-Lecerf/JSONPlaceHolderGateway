import { Injectable } from '@nestjs/common';
import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { PostDtoIn } from './DTO/postDTOIn';
import { PostDtoOut } from './DTO/postDTOOut';
import { Post } from './Post';

@Injectable()
export class PostMapper implements IBaseCrudMapper<
  Post,
  PostDtoIn,
  PostDtoOut
> {
  fromDTO(dtoIn: PostDtoIn, id?: number): Post {
    return {
      userId: 0,
      id: id ?? 0,
      title: dtoIn.title,
      body: dtoIn.body,
    };
  }

  toDTO(entity: Post): PostDtoOut {
    return {
      title: entity.title,
      body: entity.body,
    };
  }
}
