import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

function AddInput() {
  return (
    <Box sx={{ display: 'flex' }}>
      <TextField sx={{ width: '500px', mr: 1 }} size="small" id="outlined-textarea" label="Что нужно сделать?" />
      <Button color="primary" variant="outlined">
        Добавить
      </Button>
    </Box>
  );
}

export default AddInput;
