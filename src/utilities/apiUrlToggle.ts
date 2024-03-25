export const apiUrlToggle = () => {
  let useMainApi = true;

  const mainApiUrl = 'https://cb17b4fb6a0456c5.mokky.dev/todos';
  const reserveApiUrl = 'http://localhost:3000/todos'; // reserve locale JSON-Server

  return useMainApi ? mainApiUrl : reserveApiUrl;
};
