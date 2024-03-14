import { useState } from 'react';

import AddInput from '../AddInput/AddInput';
import TodoList from '../TodoList/TodoList';

import { MainStyles } from './Main.styles';
import { ITodoItem } from '../../types/Interfaces';

function Main() {
  const [todo, setTodo] = useState<ITodoItem[]>([
    {
      id: 1,
      title: 'Запустить РК в Сети',
      completed: false,
    },
    {
      id: 2,
      title: 'Сделать рассылку по мессенджерам',
      completed: true,
    },
    {
      id: 3,
      title: 'Собрать обратную связь по входящим лидам',
      completed: false,
    },    
    {
      id: 4,
      title: 'Набросать структуру мероприятия и порядок действий',
      completed: false,
    },    
    {
      id: 5,
      title: 'Определить дату и время старта',
      completed: false,
    },
    {
      id: 6,
      title: 'Протестировать платежную систему и порядок оплаты перед началом',
      completed: false,
    },
    {
      id: 7,
      title: 'Выдать чеки по оплатам',
      completed: false,
    },
    {
      id: 8,
      title: 'Помыть кота',
      completed: false,
    },
  ]);

  return (
    <MainStyles>
      <AddInput />
      <TodoList todo={todo} setTodo={setTodo} />
    </MainStyles>
  );
}

export default Main;
