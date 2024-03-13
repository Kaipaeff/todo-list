import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';

import { MainStyles } from './Main.styles';

function Main() {
  return (
    <MainStyles>
      <AddInput />
      <TodoList />
    </MainStyles>
  );
}

export default Main;
