import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { PhotoDTOIn } from './DTO/PhotoDTOIn';
import { PhotoDTOOut } from './DTO/PhotoDTOOut';
import { Photo } from './Photo';

export class PhotosMapper implements IBaseCrudMapper<
  Photo,
  PhotoDTOIn,
  PhotoDTOOut
> {
  fromDTO(dtoIn: PhotoDTOIn, id?: number): Photo {
    return {
      albumId: 0,
      id: id ?? 0,
      title: dtoIn.title,
      url: dtoIn.url,
      thumbnailUrl: dtoIn.thumbnailUrl,
    };
  }

  toDTO(entity: Photo): PhotoDTOOut {
    return {
      title: entity.title,
      url: entity.url,
      thumbnailUrl: entity.thumbnailUrl,
    };
  }
}
