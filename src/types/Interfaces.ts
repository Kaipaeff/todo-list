export interface ITodoItems {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoListProps {
  todo: ITodoItems[] | [];
  setTodo: React.Dispatch<React.SetStateAction<ITodoItems[]>>;
}

export interface IListItemProps extends ITodoListProps {
  task: ITodoItems;
  index: number;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  // onConfirm: () => void;
  children: React.ReactNode;
}
