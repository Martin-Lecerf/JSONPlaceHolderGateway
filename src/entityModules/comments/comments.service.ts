import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/common/http/http.service';

@Injectable()
export class CommentsService {
  constructor(private http: HttpService) {}

  async findById(id: number): Promise<Comment> {
    return this.http.get<Comment>(`/comments/${id}`);
  }

  async findAll(): Promise<Comment[]> {
    return this.http.get<Comment[]>('/comments');
  }
}
