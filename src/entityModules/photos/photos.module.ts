import { Module } from '@nestjs/common';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';
import { PhotosMapper } from './PhotosMapper';

@Module({
  providers: [PhotosService, PhotosMapper],
  controllers: [PhotosController],
})
export class PhotosModule {}
