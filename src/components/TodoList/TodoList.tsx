import Filters from '../Filters/Filters';
import ListItem from '../ListItem/ListItem';

import { ITodoListProps } from '../../types/Interfaces';
import { TodoListItemsStyles, TodoListStyles } from './TodoList.styles';

function TodoList({ todo, setTodo, setActiveTab }: ITodoListProps) {
  return (
    <TodoListStyles>
      <Filters todo={todo} setActiveTab={setActiveTab} />
      <TodoListItemsStyles>
        {todo?.map((task, index) => <ListItem key={task.id} task={task} todo={todo} setTodo={setTodo} index={index} />)}
      </TodoListItemsStyles>
    </TodoListStyles>
  );
}

export default TodoList;
