// const url = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
const url = 'http://localhost:3000/todos'; //reserve locale JSON-Server

export const updateCheckedTodoApi = async (id: number, data: { completed: boolean }) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update checked status todo. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Failed to update checked status todo: ${error.message}`);
  }
};
