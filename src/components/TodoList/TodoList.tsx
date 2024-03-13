import ItemsTotalCount from '../ItemsTotalCount/ItemsTotalCount';
import ListItem from '../ListItem/ListItem';
import { TodoListItemsStyles, TodoListStyles } from './TodoList.styles';

function TodoList() {
  return (
    <TodoListStyles>
      <ItemsTotalCount />
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
