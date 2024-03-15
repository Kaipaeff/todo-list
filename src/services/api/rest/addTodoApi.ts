import { ITodoItems } from '../../../types/Interfaces';

const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';

export const addTodoApi = async (title: string): Promise<ITodoItems> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add todo. Status: ${response.status}`);
    }

    const todo: ITodoItems = await response.json();
    return todo;
  } catch (error: any) {
    console.error('Error adding todo:', error.message);
    throw error;
  }
};
