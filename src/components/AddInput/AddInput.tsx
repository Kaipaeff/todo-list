import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';

import { addTodoApi } from '../../services/api/rest/addTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';
import { ITodoListProps } from '../../types/Interfaces';
import { AddInputStyles, ClearIconStyled, InputStyles } from './AddInput.styles';

function AddInput({ setTodo }: ITodoListProps) {
  const [value, setValue] = useState<string>('');
  const [notificationAdd, setNotificationAdd] = useState<boolean>(false);
  const addInputRef = useRef<HTMLInputElement>(null);

  let abortController: AbortController;

  useEffect(() => {
    if (addInputRef.current) {
      addInputRef.current.focus();
    }
  }, []);

  const handleAdd = useCallback(async () => {
    if (value) {
      try {
        abortController?.abort();
        abortController = new AbortController();
        const signal = abortController.signal;
        setValue('');
        await addTodoApi(value, signal);
        const allTodosFromApi = await getAllTodosApi(signal);
        setTodo(allTodosFromApi);
        setNotificationAdd(true);
      } catch (error: any) {
        console.error('Error adding todo:', error.message);
        throw error;
      }
    }
  }, [value]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (value) {
      if (event.key === 'Enter') {
        handleAdd();
        event.preventDefault();
      } else if (event.key === 'Escape') {
        setValue('');
      }
    }
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationAdd(false);
  };

  return (
    <AddInputStyles>
      <InputStyles
        type="text"
        placeholder="Что нужно сделать?"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
        onKeyDown={handleKeyPress}
        maxLength={50}
        ref={addInputRef}
      />

      <ClearIconStyled
        onClick={(_event: React.MouseEvent) => {
          setValue('');
        }}
      />

      <Button
        onClick={handleAdd}
        sx={{
          height: '39px',
          padding: '0 24px',
          '@media (max-width: 640px)': {
            height: '32px',
            fontSize: '12px',
          },
        }}
        color="primary"
        variant="outlined"
      >
        Добавить
      </Button>

      <Snackbar
        open={notificationAdd}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{
          '@media (max-width: 640px)': {
            width: '70%',
            margin: '390px auto 0',
          },
        }}
      >
        <Alert severity="success" variant="standard" sx={{ width: '100%' }}>
          Задача успешно добавлена!
        </Alert>
      </Snackbar>
    </AddInputStyles>
  );
}

export default memo(AddInput);
