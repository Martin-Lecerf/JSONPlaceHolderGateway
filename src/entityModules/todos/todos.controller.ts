import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from 'src/entityModules/todos/Todo';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todosService.findById(id);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }
}
