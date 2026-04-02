import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/common/http/http.service';
import { Todo } from './Todo';
import { BaseCrudService } from 'src/abstracts/BaseCrudService.service';
import { TodoDTOIn } from './DTO/TodoDTOIn';
import { TodoDTOOut } from './DTO/TodoDTOOut';
import { TodosMapper } from './todosMapper';

@Injectable()
export class TodosService extends BaseCrudService<Todo, TodoDTOIn, TodoDTOOut> {
  constructor(httpService: HttpService, mapper: TodosMapper) {
    super(httpService, mapper, '/todos');
  }
}
