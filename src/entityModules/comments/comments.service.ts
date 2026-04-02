import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/common/http/http.service';
import { CommentDTOIn } from './DTO/commentsDTOIN';
import { BaseCrudService } from 'src/abstracts/BaseCrudService.service';
import { CommentDTOOut } from './DTO/commentsDTOOut';
import { CommentsMapper } from './commentsMapper';
import { UserComment } from './Comment';

@Injectable()
export class CommentsService extends BaseCrudService<
  UserComment,
  CommentDTOIn,
  CommentDTOOut
> {
  constructor(http: HttpService, mapper: CommentsMapper) {
    super(http, mapper, '/comments');
  }
}
