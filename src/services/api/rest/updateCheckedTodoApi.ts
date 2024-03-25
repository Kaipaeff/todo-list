import { apiUrlToggle } from '../../../utilities/apiUrlToggle';

export const updateCheckedTodoApi = async (id: number, data: { completed: boolean }, signal: AbortSignal) => {
  const url = apiUrlToggle();
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal,
    });

    if (!response.ok) {
      throw new Error(`Failed to update checked status todo. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Failed to update checked status todo: ${error.message}`);
  }
};
