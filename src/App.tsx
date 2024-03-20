import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { getAllTodosApi } from './services/api/rest/getAllTodosApi';
import { ITodoItems } from './types/Interfaces';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [todo, setTodo] = useState<ITodoItems[] | []>([]);

  useEffect(() => {
    (async () => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      const allTodosFromApi = await getAllTodosApi(signal);
      setTodo(allTodosFromApi);
    })();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header todo={todo} />
      <Main todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
