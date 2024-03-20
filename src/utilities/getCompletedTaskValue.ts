import { ITodoItems } from '../types/Interfaces';

export const getCompletedTaskValue = (todo: ITodoItems[]) => {
  const totalCount = todo.length;
  const completedCount = todo.filter(el => el.completed).length;
  return parseFloat(((completedCount / totalCount) * 100).toFixed(2));
};
