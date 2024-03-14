export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoListProps {
  todo?: ITodoItem[];
  setTodo: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
  task?: ITodoItem;
}
