import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { addTodoApi } from '../../services/api/rest/addTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';
import { ITodoListProps } from '../../types/Interfaces';
import { AddInputStyles, InputStyles } from './AddInput.styles';

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
    if (value && event.key === 'Enter') {
      handleAdd();
      event.preventDefault();
    }
    if (event.key === 'Escape') {
      setValue('');
    }
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
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
        maxLength={35}
        ref={addInputRef}
      />

      <ClearIcon
        style={{ position: 'absolute', right: '150', cursor: 'pointer' }}
        onClick={(_event: React.MouseEvent) => {
          setValue('');
        }}
      />

      <Button onClick={handleAdd} sx={{ height: '39px', padding: '0 24px' }} color="primary" variant="outlined">
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
