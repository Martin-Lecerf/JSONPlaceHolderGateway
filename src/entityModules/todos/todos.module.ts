import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosMapper } from './todosMapper';
import { TodosController } from './todos.controller';

@Module({
  providers: [TodosService, TodosMapper],
  controllers: [TodosController],
})
export class TodosModule {}
