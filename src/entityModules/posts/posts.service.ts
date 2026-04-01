import { Injectable } from '@nestjs/common';
import { HttpService } from '../../common/http/http.service';
import { Post } from './Post';

@Injectable()
export class PostsService {
  constructor(private http: HttpService) {}

  async findById(id: number): Promise<Post> {
    return this.http.get<Post>(`/posts/${id}`);
  }

  async findAll(): Promise<Post[]> {
    return this.http.get<Post[]>('/posts');
  }
}
