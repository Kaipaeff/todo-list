import { useEffect, useState } from 'react';

import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';

import { MainStyles } from './Main.styles';
import { ITodoItems } from '../../types/Interfaces';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';

function Main() {
  const [todo, setTodo] = useState<ITodoItems[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todos = await getAllTodosApi();
        setTodo(todos);
      } catch (error: any) {
        console.error('Error fetching todos:', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <MainStyles>
      <AddInput todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </MainStyles>
  );
}

export default Main;
