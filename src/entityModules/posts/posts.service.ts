import { Injectable } from '@nestjs/common';
import { HttpService } from '../../common/http/http.service';
import { Post } from './Post';
import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { BaseCrudService } from 'src/abstracts/BaseCrudService.service';
import { PostDtoIn } from './DTO/postDTOIn';
import { PostDtoOut } from './DTO/postDTOOut';
import { PostMapper } from './postMapper';

@Injectable()
export class PostsService extends BaseCrudService<Post, PostDtoIn, PostDtoOut> {
  constructor(http: HttpService, mapper: PostMapper) {
    super(http, mapper, '/posts');
  }
}
