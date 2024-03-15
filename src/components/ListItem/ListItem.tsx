import { useEffect, useState, useRef } from 'react';

import { deleteTodoApi } from '../../services/api/rest/deleteTodoApi';
import { getAllTodosApi } from '../../services/api/rest/getAllTodosApi';

import Modal from '../Modal/Modal';

import { IListItemProps } from '../../types/Interfaces';
import { ListItemStyles, DeleteOutlinedIconStyles, EditOutlinedIconStyles } from './ListItem.styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import { Snackbar, Alert, Button, Box } from '@mui/material';

function ListItem({ index = 0, task, todo, setTodo }: IListItemProps) {
  const [_checked, setChecked] = useState<boolean>(true);
  const [notification, setNotification] = useState<boolean>(false);
  const [scrollToBottomOnUpdate, setScrollToBottomOnUpdate] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const listItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToBottomOnUpdate && listItemRef.current) {
      listItemRef.current.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
      setScrollToBottomOnUpdate(false);
    }
  }, [todo, scrollToBottomOnUpdate]);

  // useEffect(() => {
  //   if (notification) {
  //     setShowModal(false);
  //     setTimeout(() => setNotification(false), 6000); // Закрыть уведомление через 6 секунд
  //   }
  // }, [notification]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleEdit = () => {
    console.log('edit clicked!');
  };

  const handleDelete = async () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async (id: number) => {
    try {
      setShowModal(false);
      await deleteTodoApi(id);
      const todos = await getAllTodosApi();
      setTodo(todos);
      setNotification(true);
      // setTimeout(() => setNotification(true), 400);
    } catch (error: any) {
      console.error('Error deleting todo:', error.message);
      throw error;
    }
  };

  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <>
      <ListItemStyles ref={listItemRef}>
        <Card sx={{ maxWidth: 1 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="body1" color="text.secondary" mr={'6px'} fontSize={'18px'} fontWeight={'700'}>
              {`${index + 1}.`}
            </Typography>

            <Typography variant="body1" color="text.secondary" mr={'auto'} fontSize={'18px'}>
              {task?.title}
            </Typography>

            <Tooltip title="Done" placement="top">
              <Checkbox checked={task?.completed} onChange={handleChange} style={{ marginRight: '24px' }} />
            </Tooltip>

            <Tooltip title="Edit" placement="top">
              <EditOutlinedIconStyles onClick={handleEdit} />
            </Tooltip>

            <Tooltip title="Delete" placement="top">
              <DeleteOutlinedIconStyles onClick={() => handleDelete()} />
            </Tooltip>
          </CardContent>
        </Card>
      </ListItemStyles>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Typography variant="h6">Вы уверены, что хотите удалить эту задачу?</Typography>
        <Box>
          <Button variant="outlined" sx={{ mr: '40px' }} onClick={() => setShowModal(false)}>
            Отмена
          </Button>
          <Button variant="outlined" color="error" onClick={() => handleConfirmDelete(task.id)}>
            Удалить
          </Button>
        </Box>
      </Modal>

      <Snackbar
        open={notification}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          Задача удалена!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ListItem;
