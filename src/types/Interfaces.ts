export interface ITodoItems {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoListProps {
  todo?: ITodoItems[] | [];
  setTodo: React.Dispatch<React.SetStateAction<ITodoItems[]>>;
  setActiveTab?: React.Dispatch<React.SetStateAction<number>>;
}

export interface IListItemProps extends ITodoListProps {
  task: ITodoItems;
  index: number;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface IFiltersProps extends Pick<ITodoListProps, 'todo' | 'setActiveTab'> {}

export interface ITotalItemsCountProps extends IFiltersProps {}

export interface IActiveModeTabsProps extends Pick<ITodoListProps, 'setActiveTab'> {}
