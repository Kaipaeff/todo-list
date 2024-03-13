import { useState } from 'react';

import { ListItemStyles } from './ListItem.styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Tooltip from '@mui/material/Tooltip';

function ListItem() {
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
          <Typography variant="body1" color="text.secondary" mr={'auto'}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
          </Typography>
          <Tooltip title="Done" placement="top">
            <Checkbox checked={checked} onChange={handleChange} style={{ marginRight: '24px' }} />
          </Tooltip>

          <Tooltip title="Edit" placement="top">
            <EditOutlinedIcon onClick={handleEdit} color="primary" style={{ cursor: 'pointer', marginRight: '24px' }} />
          </Tooltip>

          <Tooltip title="Delete" placement="top">
            <DeleteOutlinedIcon onClick={handleDelete} color="primary" style={{ cursor: 'pointer' }} />
          </Tooltip>
        </CardContent>
      </Card>
    </ListItemStyles>
  );
}

export default ListItem;
