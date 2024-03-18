import { useEffect, useState } from 'react';

import AddInput from '../AddInput/AddInput';
// import ActiveModeTabs from '../ActiveModeTabs/ActiveModeTabs';
import TodoList from '../TodoList/TodoList';

import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';
import { ITodoItems } from '../../types/Interfaces';
import { MainStyles } from './Main.styles';

function Main() {
  const [todo, setTodo] = useState<ITodoItems[] | []>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const allTodosFromApi = await getAllTodosApi();
      setTodo(allTodosFromApi);
    })();
  }, []);

  const filterTasks = () => {
    if (activeTab === 0) {
      return todo;
    } else if (activeTab === 1) {
      return todo.filter(task => !task.completed);
    } else {
      return todo.filter(task => task.completed);
    }
  };

  return (
    <MainStyles>
      <AddInput todo={todo} setTodo={setTodo} />
      <TodoList todo={filterTasks()} setTodo={setTodo} setActiveTab={setActiveTab} />
    </MainStyles>
  );
}

export default Main;
