import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/common/http/http.service';
import { Todo } from './Todo';

@Injectable()
export class TodosService {
  constructor(private httpService: HttpService) {}

  async findById(id: number): Promise<Todo> {
    return this.httpService.get<Todo>(`todos/${id}`);
  }

  async findAll() {
    return this.httpService.get<Todo[]>(`todos`);
  }
}
