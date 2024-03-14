import { useState } from 'react';

import { AddInputStyles } from './AddInput.styles';

import { Box, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

function AddInput() {
  const [name, setName] = useState('');

  return (
    <AddInputStyles style={{ position: 'relative' }}>
      <Box sx={{ display: 'flex' }} component="form" noValidate autoComplete="off">
        <TextField
          sx={{ width: '500px', mr: 1 }}
          size="small"
          placeholder="Что нужно сделать?"
          id="outlined-controlled"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
      </Box>
      <ClearIcon
        style={{ position: 'absolute', right: '150', cursor: 'pointer' }}
        onClick={(_event: React.MouseEvent) => {
          setName('');
        }}
      />
      <Button sx={{ height: '40px', padding: '0 24px' }} color="primary" variant="outlined">
        Добавить
      </Button>
    </AddInputStyles>
  );
}

export default AddInput;
