import { apiUrlToggle } from '../../../utilities/apiUrlToggle';

export const updateTaskApi = async (taskId: number, data: { title: string }, signal: AbortSignal) => {
  const url = apiUrlToggle();

  try {
    const response = await fetch(`${url}/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal,
    });

    if (!response.ok) {
      throw new Error(`Ошибка обновления задачи. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Ошибка при обновлении задачи: ${error.message}`);
  }
};
