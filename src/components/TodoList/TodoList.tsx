import Filters from '../Filters/Filters';
import ListItem from '../ListItem/ListItem';
import { TodoListItemsStyles, TodoListStyles } from './TodoList.styles';

function TodoList() {
  return (
    <TodoListStyles>
      <Filters />
      <TodoListItemsStyles>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </TodoListItemsStyles>
    </TodoListStyles>
  );
}

export default TodoList;
