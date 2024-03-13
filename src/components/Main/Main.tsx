import Navbar from '../Navbar/Navbar';
import AddInput from '../AddInput/AddInput';
import { MainStyles } from './Main.styles';
import TodoList from '../TodoList/TodoList';

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
