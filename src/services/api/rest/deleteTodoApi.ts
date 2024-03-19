// const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
const url = 'http://localhost:3000/todos'; //reserve locale JSON-Server

export const deleteTodoApi = async (id: number, signal: AbortSignal): Promise<void> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      signal,
    });

    if (!response.ok) {
      throw new Error(`Failed to delete todo. Status: ${response.status}`);
    }
  } catch (error: any) {
    console.error('Error deleting todo:', error.message);
    throw error;
  }
};
