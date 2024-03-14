export interface ITodoItems {
  id: number | string;
  title: string;
  completed: boolean;
}

export interface ITodoListProps {
  todo: ITodoItems[] | [];
  setTodo: React.Dispatch<React.SetStateAction<ITodoItems[]>>;
}

export interface IListItemProps extends Pick<ITodoListProps, 'setTodo'> {
  task: ITodoItems;
  index: number;
}
