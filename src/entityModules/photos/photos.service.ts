import { Injectable } from '@nestjs/common';
import { BaseCrudService } from 'src/abstracts/BaseCrudService.service';
import { PhotoDTOIn } from './DTO/PhotoDTOIn';
import { Photo } from './Photo';
import { PhotoDTOOut } from './DTO/PhotoDTOOut';
import { PhotosMapper } from './PhotosMapper';
import { HttpService } from 'src/common/http/http.service';

@Injectable()
export class PhotosService extends BaseCrudService<
  Photo,
  PhotoDTOIn,
  PhotoDTOOut
> {
  constructor(http: HttpService, mapper: PhotosMapper) {
    super(http, mapper, '/photos');
  }
}
