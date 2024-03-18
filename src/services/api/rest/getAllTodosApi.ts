import { ITodoItems } from '../../../types/Interfaces';

const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
// const url = 'http://localhost:3000/todos';

export const getAllTodosApi = async (): Promise<ITodoItems[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch todos. Status: ${response.status}`);
      throw new Error(`Failed to fetch todos`);
    }
    const todos: ITodoItems[] = await response.json();
    return todos;
  } catch (error: any) {
    console.error('Error fetching todos:', error.message);
    throw error;
  }
};
