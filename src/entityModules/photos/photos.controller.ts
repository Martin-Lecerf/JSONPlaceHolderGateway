import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotoDTOOut } from './DTO/PhotoDTOOut';

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Get()
  getAllPhotos(): Promise<PhotoDTOOut[]> {
    return this.photosService.findAll();
  }

  @Get(':id')
  getPhotoById(@Param('id', ParseIntPipe) id: number): Promise<PhotoDTOOut> {
    return this.photosService.findById(id);
  }
}
