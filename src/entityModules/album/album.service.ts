import { Injectable } from '@nestjs/common';
import { BaseCrudService } from 'src/abstracts/BaseCrudService.service';
import { HttpService } from 'src/common/http/http.service';
import { Album } from 'src/entityModules/album/Album';
import { AlbumMapper } from './albumMapper';
import { AlbumDTOIn } from './DTO/AlbumDTOIn';
import { AlbumDTOOut } from './DTO/AlbumDTOOut';
@Injectable()
export class AlbumService extends BaseCrudService<
  Album,
  AlbumDTOIn,
  AlbumDTOOut
> {
  constructor(http: HttpService, mapper: AlbumMapper) {
    super(http, mapper, '/albums');
  }
}
