import { useEffect, useState } from 'react';

import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';

import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';
import { ITodoItems } from '../../types/Interfaces';
import { MainStyles } from './Main.styles';

function Main() {
  const [todo, setTodo] = useState<ITodoItems[] | []>([]);

  useEffect(() => {
    (async () => {
      const allTodosFromApi = await getAllTodosApi();
      setTodo(allTodosFromApi);
    })();
  }, []);

  return (
    <MainStyles>
      <AddInput setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </MainStyles>
  );
}

export default Main;
