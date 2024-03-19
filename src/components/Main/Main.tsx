import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';

import { IMainProps } from '../../types/Interfaces';
import { MainStyles } from './Main.styles';

function Main({ todo = [], setTodo }: IMainProps) {
  return (
    <MainStyles>
      <AddInput setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </MainStyles>
  );
}

export default Main;
