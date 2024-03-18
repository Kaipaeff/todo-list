import { memo, useState } from 'react';

import { Box, TextField, Button, Snackbar, Alert } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { addTodoApi } from '../../services/api/rest/addTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';
import { ITodoListProps } from '../../types/Interfaces';
import { AddInputStyles } from './AddInput.styles';

function AddInput({ todo, setTodo }: ITodoListProps) {
  const [value, setValue] = useState<string>('');
  const [notificationAdd, setNotificationAdd] = useState<boolean>(false);

  const handleAdd = async () => {
    if (value) {
      try {
        setValue('');
        await addTodoApi(value);
        const allTodosFromApi = await getAllTodosApi();
        setTodo(allTodosFromApi);
        setNotificationAdd(true);
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
    setNotificationAdd(false);
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
          inputProps={{ maxLength: 35 }}
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
        open={notificationAdd}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        style={{ marginTop: '390px' }}
      >
        <Alert severity="success" variant="standard" sx={{ width: '100%' }}>
          Задача успешно добавлена!
        </Alert>
      </Snackbar>
    </AddInputStyles>
  );
}

export default memo(AddInput);
