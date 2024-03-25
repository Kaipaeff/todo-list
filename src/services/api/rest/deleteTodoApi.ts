import { apiUrlToggle } from '../../../utilities/apiUrlToggle';

export const deleteTodoApi = async (id: number, signal: AbortSignal): Promise<void> => {
  const url = apiUrlToggle();
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
