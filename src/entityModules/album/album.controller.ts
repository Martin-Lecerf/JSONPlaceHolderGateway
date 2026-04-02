import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './Album';
import { AlbumDTOOut } from './DTO/AlbumDTOOut';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumService) {}

  @Get(':id')
  getAlbumById(@Param('id', ParseIntPipe) id: number): Promise<AlbumDTOOut> {
    return this.albumService.findById(id);
  }

  @Get()
  getAllAlbums(): Promise<AlbumDTOOut[]> {
    return this.albumService.findAll();
  }
}
