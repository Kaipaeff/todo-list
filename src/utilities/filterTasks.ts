import { ITodoItems } from '../types/Interfaces';

const filterTasks = (activeTab: number, todo: ITodoItems[]) => {
  if (activeTab === 0) {
    return todo;
  } else if (activeTab === 1) {
    return todo.filter(task => !task.completed);
  } else {
    return todo.filter(task => task.completed);
  }
};

export default filterTasks;
