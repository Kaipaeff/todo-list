import { ITodoItems } from '../../../types/Interfaces';

const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
// const url = 'http://localhost:3000/todos'; //reserve locale JSON-Server

export const updateTaskApi = async (taskId: number, data: { title: string }) => {
  try {
    const response = await fetch(`${url}/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка обновления задачи. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Ошибка при обновлении задачи: ${error.message}`);
  }
};
