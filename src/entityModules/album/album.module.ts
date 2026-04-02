import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumMapper } from './albumMapper';
import { AlbumsController } from './album.controller';

@Module({
  providers: [AlbumService, AlbumMapper],
  controllers: [AlbumsController],
})
export class AlbumModule {}
