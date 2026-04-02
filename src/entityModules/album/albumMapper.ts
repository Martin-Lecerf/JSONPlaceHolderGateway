import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { AlbumDTOIn } from './DTO/AlbumDTOIn';
import { AlbumDTOOut } from './DTO/AlbumDTOOut';
import { Album } from './Album';

export class AlbumMapper implements IBaseCrudMapper<
  Album,
  AlbumDTOIn,
  AlbumDTOOut
> {
  fromDTO(dtoIn: AlbumDTOIn, id?: number): Album {
    return {
      id: id ?? 0,
      userId: 0,
      title: dtoIn.title,
    };
  }

  toDTO(entity: Album): AlbumDTOOut {
    return {
      title: entity.title,
    };
  }
}
