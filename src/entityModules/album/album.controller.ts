import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './Album';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumService) {}

  @Get(':id')
  getAlbumById(@Param('id', ParseIntPipe) id: number): Promise<Album> {
    return this.albumService.findById(id);
  }

  @Get()
  getAllAlbums() {
    return this.albumService.findAll();
  }
}
