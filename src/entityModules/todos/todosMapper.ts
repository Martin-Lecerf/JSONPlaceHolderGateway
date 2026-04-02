import { IBaseCrudMapper } from 'src/interfaces/IBaseCrudMapper';
import { Todo } from './Todo';
import { TodoDTOIn } from './DTO/TodoDTOIn';
import { TodoDTOOut } from './DTO/TodoDTOOut';

export class TodosMapper implements IBaseCrudMapper<
  Todo,
  TodoDTOIn,
  TodoDTOOut
> {
  fromDTO(dtoIn: TodoDTOIn, id?: number): Todo {
    return {
      userId: 0,
      id: id ?? 0,
      title: dtoIn.title,
      completed: dtoIn.completed,
    };
  }

  toDTO(entity: Todo): TodoDTOOut {
    return {
      userId: entity.userId,
      id: entity.id,
      title: entity.title,
      completed: entity.completed,
    };
  }
}
