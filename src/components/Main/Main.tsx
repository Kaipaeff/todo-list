import Navbar from '../Navbar/Navbar';
import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';

import { MainStyles } from './Main.styles';

function Main() {
  return (
    <MainStyles>
      <Navbar />
      <AddInput />
      <TodoList />
    </MainStyles>
  );
}

export default Main;
