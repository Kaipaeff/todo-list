const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
// const url = 'http://localhost:3000/todos'; //reserve locale JSON-Server

export const addTodoApi = async (title: string, signal: AbortSignal): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
      signal,
    });

    if (!response.ok) {
      throw new Error(`Failed to add todo. Status: ${response.status}`);
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log('Request aborted:', error.message);
    } else {
      console.error('Error adding todo:', error.message);
    }
    throw error;
  }
};
