import { ITodoItems } from '../../../types/Interfaces';

// const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
const url = 'http://localhost:3000/todos'; //reserve locale JSON-Server

export const getAllTodosApi = async (signal: AbortSignal): Promise<ITodoItems[]> => {
  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(`Failed to fetch todos. Status: ${response.status}`);
    }
    const todos: ITodoItems[] = await response.json();
    return todos;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log('Request aborted:', error.message);
    } else {
      console.error('Error fetching todos:', error.message);
    }
    throw error;
  }
};
