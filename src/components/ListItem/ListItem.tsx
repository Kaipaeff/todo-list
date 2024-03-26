import { useEffect, useState, useRef, memo, useCallback, useLayoutEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Tooltip,
  Box,
  Button,
  Snackbar,
  Alert,
  AlertColor,
} from '@mui/material';

import Modal from '../Modal/Modal';
import { deleteTodoApi } from '../../services/api/rest/deleteTodoApi';
import { updateCheckedTodoApi } from '../../services/api/rest/updateCheckedTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';
import { updateTaskApi } from '../../services/api/rest/updateTaskApi';

import { IListItemProps, INotificationProps } from '../../types/Interfaces';
import {
  ListItemStyles,
  DeleteOutlinedIconStyles,
  EditOutlinedIconStyles,
  SaveOutlineIconStyles,
  CancelOutlineIconStyles,
  InputStyles,
} from './ListItem.styles';
import { blue, deleteItemColor, textColor, white } from '../../styles/Colors';

function ListItem({ index = 0, task, todo = [], setTodo }: IListItemProps) {
  const [checked, setChecked] = useState<boolean>(task.completed);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [notification, setNotification] = useState<INotificationProps>({ open: false, type: '', message: '' });
  const [scrollToBottomOnUpdate, setScrollToBottomOnUpdate] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.title);

  const listItemRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (scrollToBottomOnUpdate && listItemRef.current) {
      listItemRef.current.lastElementChild?.scrollIntoView({ behavior: 'instant' });
      setScrollToBottomOnUpdate(false);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (showModal && event.key === 'Escape') {
        setShowModal(false);
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

  const handleDelete = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleConfirmDelete = async (id: number) => {
    try {
      let updateTodosTimerId;
      setShowModal(false);
      const abortController = new AbortController();
      const signal = abortController.signal;
      await deleteTodoApi(id, signal);
      setNotification({ open: true, type: 'success', message: 'Задача успешно удалена!' });

      if (updateTodosTimerId) {
        clearTimeout(updateTodosTimerId);
      }

      updateTodosTimerId = setTimeout(() => setTodo(todo.filter(el => el.id !== id)), 500);
    } catch (error: any) {
      console.error('Error deleting todo:', error.message);
      throw error;
    }
  };

  const handleCloseNotification = useCallback((_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification(prevState => ({ ...prevState, open: false }));
  }, []);

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const newChecked = event.target.checked;
        setChecked(newChecked);
        const abortController = new AbortController();
        const signal = abortController.signal;
        const updatedTodo = await updateCheckedTodoApi(task.id, { completed: newChecked }, signal);
        setTodo(prev =>
          prev.map(todoItem => {
            return todoItem.id === updatedTodo.id ? updatedTodo : todoItem;
          }),
        );
      } catch (error: any) {
        console.error('Error updating check status todo:', error.message);
      }
    },
    [task.id],
  );

  const handleEdit = useCallback(() => {
    checked
      ? setNotification({ open: true, type: 'info', message: 'Задача уже закрыта, выберете другую!' })
      : setIsEditing(true);
  }, [checked]);

  const handleSave = async () => {
    try {
      let updatedTodo = [...todo];
      const taskIndex = updatedTodo.findIndex(todoItem => todoItem.id === task.id);
      if (taskIndex !== -1) {
        const abortController = new AbortController();
        const signal = abortController.signal;
        updatedTodo[taskIndex] = { ...updatedTodo[taskIndex], title: editedTask };
        setTodo(updatedTodo);
        setIsEditing(false);
        await updateTaskApi(task.id, { title: editedTask }, signal);
        setNotification({
          open: true,
          type: 'success',
          message: 'Задача успешно сохранена!',
        });
      }
    } catch (error: any) {
      console.error('Error saving todo:', error.message);
    }
  };

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    setEditedTask(task.title);
  }, []);

  const hideDuration = notification.type === 'error' ? 500 : notification.type === 'info' ? 2000 : 1500;

  return (
    <>
      <ListItemStyles ref={listItemRef}>
        <Card sx={{ maxWidth: 1, backgroundColor: showModal ? deleteItemColor : white }}>
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '@media (max-width: 640px)': {
                padding: '12px',
              },
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                marginRight: '6px',
                fontSize: '18px',
                fontWeight: '700',
                '@media (max-width: 640px)': {
                  fontSize: '16px',
                },
              }}
            >
              {`${index + 1}.`}
            </Typography>

            {!isEditing ? (
              <>
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: checked ? 'line-through' : 'none',
                    fontWeight: checked ? 500 : 400,
                    color: checked ? blue : textColor,
                    fontSize: '18px',
                    marginRight: 'auto',
                    '@media (max-width: 640px)': {
                      fontSize: '12px',
                    },
                  }}
                >
                  {task.title}
                </Typography>

                <Tooltip title="Готово" placement="top">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    sx={{
                      marginRight: '32px',
                      '@media (max-width: 640px)': {
                        marginRight: '8px',
                        '& .MuiSvgIcon-root': { fontSize: 20 },
                      },
                    }}
                  />
                </Tooltip>

                <Tooltip title="Изменить" placement="top">
                  <EditOutlinedIconStyles
                    onClick={handleEdit}
                    sx={{
                      marginRight: '40px',
                      '@media (max-width: 640px)': {
                        marginRight: '12px',
                        fontSize: 'large',
                      },
                    }}
                  />
                </Tooltip>

                <Tooltip title="Удалить" placement="top">
                  <DeleteOutlinedIconStyles onClick={() => handleDelete()} />
                </Tooltip>
              </>
            ) : (
              <>
                <InputStyles value={editedTask} onChange={e => setEditedTask(e.target.value)} />
                <SaveOutlineIconStyles onClick={handleSave} />
                <CancelOutlineIconStyles onClick={handleCancel} />
              </>
            )}
          </CardContent>
        </Card>

        <Snackbar
          open={notification.open}
          autoHideDuration={hideDuration}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          style={{ marginTop: '390px' }}
        >
          <Alert
            severity={notification.type as AlertColor}
            variant="standard"
            sx={{
              width: '100%',
              '@media (max-width: 640px)': {
                width: '70%',
              },
            }}
          >
            {notification.message}
          </Alert>
        </Snackbar>

        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <Typography variant="h6" mb={1}>
            Вы уверены, что хотите удалить задачу
          </Typography>
          <Typography variant="h6" mb={3} color={blue} textAlign={'center'}>
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
