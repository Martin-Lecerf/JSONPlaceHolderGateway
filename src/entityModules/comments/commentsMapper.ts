import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { CommentDTOIn } from './DTO/commentsDTOIN';
import { CommentDTOOut } from './DTO/commentsDTOOut';
import { UserComment } from './Comment';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsMapper implements IBaseCrudMapper<
  UserComment,
  CommentDTOIn,
  CommentDTOOut
> {
  fromDTO(dtoIn: CommentDTOIn, id?: number): UserComment {
    return {
      postId: 0,
      id: id ?? 0,
      name: dtoIn.name,
      email: dtoIn.email,
      body: dtoIn.body,
    };
  }

  toDTO(comment: UserComment): CommentDTOOut {
    return {
      name: comment.name,
      email: comment.email,
      body: comment.body,
    };
  }
}
