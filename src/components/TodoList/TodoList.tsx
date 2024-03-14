import Filters from '../Filters/Filters';
import ListItem from '../ListItem/ListItem';

import { TodoListItemsStyles, TodoListStyles } from './TodoList.styles';
import { ITodoListProps } from '../../types/Interfaces';

function TodoList({ todo, setTodo }: ITodoListProps) {
  return (
    <TodoListStyles>
      <Filters />
      <TodoListItemsStyles>
        {todo?.map(task => <ListItem key={task.id} task={task} setTodo={setTodo} />)}
      </TodoListItemsStyles>
    </TodoListStyles>
  );
}

export default TodoList;
