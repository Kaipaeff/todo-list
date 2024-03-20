import { useEffect, useState, useRef, memo } from 'react';
import { Card, CardContent, Typography, Checkbox, Tooltip, Box, Button, Snackbar, Alert } from '@mui/material';

import Modal from '../Modal/Modal';
import { deleteTodoApi } from '../../services/api/rest/deleteTodoApi';
import { updateCheckedTodoApi } from '../../services/api/rest/updateCheckedTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';

import { IListItemProps } from '../../types/Interfaces';
import { ListItemStyles, DeleteOutlinedIconStyles, EditOutlinedIconStyles } from './ListItem.styles';
import { blue, deleteItemColor, textColor, white } from '../../styles/Colors';

function ListItem({ index = 0, task, todo = [], setTodo }: IListItemProps) {
  const [checked, setChecked] = useState<boolean>(task.completed);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [notificationDelete, setNotificationDelete] = useState<boolean>(false);
  const [scrollToBottomOnUpdate, setScrollToBottomOnUpdate] = useState<boolean>(true);

  const listItemRef = useRef<HTMLDivElement>(null);
  let abortController: AbortController;

  useEffect(() => {
    if (scrollToBottomOnUpdate && listItemRef.current) {
      listItemRef.current.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
      setScrollToBottomOnUpdate(false);
    }
  }, [todo]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (showModal) {
        if (event.key === 'Escape') {
          setShowModal(false);
        }
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => removeEventListener('keydown', handleKeyPress);
  }, [showModal]);

  useEffect(() => {
    (async () => {
      const abortController = new AbortController();
      const signal = abortController.signal;
      const allTodosFromApi = await getAllTodosApi(signal);
      setTodo(allTodosFromApi);
    })();
  }, []);

  const handleEdit = () => {
    console.log('edit clicked!');
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async (id: number) => {
    try {
      let updateTodosTimerId;
      abortController?.abort();
      abortController = new AbortController();
      const signal = abortController.signal;
      setShowModal(false);
      await deleteTodoApi(id, signal);
      // setNotificationDelete(true);
      // const allTodosFromApi = await getAllTodosApi();
      // setTodo(allTodosFromApi)
      setNotificationDelete(true);

      if (updateTodosTimerId) {
        clearTimeout(updateTodosTimerId);
      }

      updateTodosTimerId = setTimeout(() => setTodo(todo.filter(el => el.id !== id)), 500);
    } catch (error: any) {
      console.error('Error deleting todo:', error.message);
      throw error;
    }
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationDelete(false);
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const newChecked = event.target.checked;
      setChecked(newChecked);
      const updatedTodo = await updateCheckedTodoApi(task.id, { completed: newChecked });
      setTodo(prev =>
        prev.map(todoItem => {
          return todoItem.id === updatedTodo.id ? updatedTodo : todoItem;
        }),
      );
    } catch (error: any) {
      console.error('Error updating check status todo:', error.message);
    }
  };

  return (
    <>
      <ListItemStyles ref={listItemRef}>
        <Card sx={{ maxWidth: 1, backgroundColor: showModal ? deleteItemColor : white }}>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: checked ? backgroundColor : white,
            }}
          >
            <Typography variant="body1" color="text.secondary" mr={'6px'} fontSize={'18px'} fontWeight={'700'}>
              {`${index + 1}.`}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textDecoration: checked ? 'line-through' : 'none',
                fontWeight: checked ? 500 : 400,
                color: checked ? blue : textColor,
                fontSize: '18px',
                marginRight: 'auto',
              }}
            >
              {task?.title}
            </Typography>

            <Tooltip title="Done" placement="top">
              <Checkbox checked={checked} onChange={handleChange} style={{ marginRight: '32px' }} />
            </Tooltip>

            <Tooltip title="Edit" placement="top">
              <EditOutlinedIconStyles onClick={handleEdit} style={{ marginRight: '40px' }} />
            </Tooltip>

            <Tooltip title="Delete" placement="top">
              <DeleteOutlinedIconStyles onClick={() => handleDelete()} />
            </Tooltip>
          </CardContent>
        </Card>

        <Snackbar
          open={notificationDelete}
          autoHideDuration={500}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          style={{ marginTop: '390px' }}
        >
          <Alert severity="error" variant="standard" sx={{ width: '100%' }}>
            Задача успешно удалена!
          </Alert>
        </Snackbar>

        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <Typography variant="h6" mb={1}>
            Вы уверены, что хотите удалить задачу
          </Typography>
          <Typography variant="h6" mb={3} color={blue}>
            {`"${task.title}"`}
          </Typography>
          <Box>
            <Button variant="outlined" sx={{ mr: '40px' }} onClick={() => setShowModal(false)}>
              Отмена
            </Button>
            <Button variant="outlined" color="error" onClick={() => handleConfirmDelete(task.id)}>
              Удалить
            </Button>
          </Box>
        </Modal>
      </ListItemStyles>
    </>
  );
}

export default memo(ListItem);
