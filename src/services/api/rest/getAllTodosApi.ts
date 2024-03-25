import { ITodoItems } from '../../../types/Interfaces';
import { apiUrlToggle } from '../../../utilities/apiUrlToggle';

export const getAllTodosApi = async (signal: AbortSignal): Promise<ITodoItems[]> => {
  const url = apiUrlToggle();
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
