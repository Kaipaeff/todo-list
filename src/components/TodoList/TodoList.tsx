import { useState } from 'react';

import Filters from '../Filters/Filters';
import ListItem from '../ListItem/ListItem';

import filterTasks from '../../utilities/filterTasks';
import { ITodoListProps } from '../../types/Interfaces';
import { TodoListItemsStyles, TodoListStyles } from './TodoList.styles';

function TodoList({ todo, setTodo }: ITodoListProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const filteredTasks = filterTasks(activeTab, todo);

  return (
    <TodoListStyles>
      <Filters todo={todo} setActiveTab={setActiveTab} />
      <TodoListItemsStyles>
        {filteredTasks.map((task, index) => (
          <ListItem key={task.id} task={task} todo={todo} setTodo={setTodo} index={index} />
        ))}
      </TodoListItemsStyles>
    </TodoListStyles>
  );
}

export default TodoList;
