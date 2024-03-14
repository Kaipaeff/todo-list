import { useState } from 'react';

import { ListItemStyles, DeleteOutlinedIconStyles, EditOutlinedIconStyles } from './ListItem.styles';
import { IListItemProps } from '../../types/Interfaces';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';

function ListItem({ index = 0, task }: IListItemProps) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleEdit = () => {
    console.log('edit clicked!');
  };

  const handleDelete = () => {
    console.log('delete clicked!');
  };

  return (
    <ListItemStyles>
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
            <DeleteOutlinedIconStyles onClick={handleDelete} />
          </Tooltip>
        </CardContent>
      </Card>
    </ListItemStyles>
  );
}

export default ListItem;
