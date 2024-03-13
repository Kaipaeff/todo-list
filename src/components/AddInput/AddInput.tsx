import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { AddInputStyles } from './AddInput.styles';

function AddInput() {
  return (
    <AddInputStyles>
      <Box sx={{ display: 'flex' }}>
        <TextField sx={{ width: '500px', mr: 1 }} size="small" id="outlined-textarea" label="Что нужно сделать?" />
        <Button color="primary" variant="outlined">
          Добавить
        </Button>
      </Box>
    </AddInputStyles>
  );
}

export default AddInput;
