import { useState } from 'react';

import { AddInputStyles } from './AddInput.styles';
import { ITodoListProps } from '../../types/Interfaces';

import { addTodo } from '../../services/api/rest/addTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';

import { Box, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function AddInput({ todo, setTodo }: ITodoListProps) {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleAdd = async () => {
    console.log('clickAdd');
    if (value) {
      try {
        await addTodo(value);
        const todos = await getAllTodosApi();
        setTodo(todos);
        setValue('');
        setOpen(true);
      } catch (error: any) {
        console.error('Error adding todo:', error.message);
      }
    }
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
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
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          Задача успешно добавлена!
        </Alert>
      </Snackbar>
    </AddInputStyles>
  );
}

export default AddInput;
