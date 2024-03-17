const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';

export const deleteTodoApi = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete todo. Status: ${response.status}`);
    }
  } catch (error: any) {
    console.error('Error deleting todo:', error.message);
    throw error;
  }
};
