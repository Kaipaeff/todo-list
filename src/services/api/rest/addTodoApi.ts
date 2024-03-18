const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
// const url = 'http://localhost:3000/todos'; //reserve api

export const addTodoApi = async (title: string, completed = false): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add todo. Status: ${response.status}`);
    }
  } catch (error: any) {
    console.error('Error adding todo:', error.message);
    throw error;
  }
};
