import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/common/http/http.service';
import { Album } from 'src/entityModules/album/Album';

@Injectable()
export class AlbumService {
  constructor(private http: HttpService) {}

  async findById(id: number): Promise<Album> {
    return this.http.get<Album>(`/albums/${id}`);
  }

  async findAll(): Promise<Album[]> {
    return this.http.get<Album[]>('/albums');
  }
}
