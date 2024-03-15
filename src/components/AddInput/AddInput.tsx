import { useState } from 'react';

import { AddInputStyles } from './AddInput.styles';
import { ITodoListProps } from '../../types/Interfaces';

import { addTodoApi } from '../../services/api/rest/addTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';

import { Box, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function AddInput({ todo, setTodo }: ITodoListProps) {
  const [value, setValue] = useState<string>('');
  const [notification, setNotification] = useState<boolean>(false);
  const [notificationTimeoutId, setNotificationTimeoutId] = useState<number | null>(null);

  const handleAdd = async () => {
    if (value) {
      try {
        setValue('');
        await addTodoApi(value);
        const todos = await getAllTodosApi();
        setTodo(todos);

        if (notificationTimeoutId) {
          clearTimeout(notificationTimeoutId);
        }

        const newTimeoutId = setTimeout(() => setNotification(true), 400);
        setNotificationTimeoutId(newTimeoutId);
      } catch (error: any) {
        console.error('Error adding todo:', error.message);
        throw error;
      }
    }
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification(false);
  };

  return (
    <AddInputStyles style={{ position: 'relative' }}>
      <Box sx={{ display: 'flex' }} component="form" noValidate autoComplete="off">
        <TextField
          sx={{ width: '500px', mr: 1 }}
          size="small"
          placeholder="Что нужно сделать?"
          id="outlined-controlled"
          value={value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
        />
      </Box>
      <ClearIcon
        style={{ position: 'absolute', right: '150', cursor: 'pointer' }}
        onClick={(_event: React.MouseEvent) => {
          setValue('');
        }}
      />
      <Button onClick={handleAdd} sx={{ height: '40px', padding: '0 24px' }} color="primary" variant="outlined">
        Добавить
      </Button>

      <Snackbar
        open={notification}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        // style={{ marginTop: '400px' }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          Задача успешно добавлена!
        </Alert>
      </Snackbar>
    </AddInputStyles>
  );
}

export default AddInput;
