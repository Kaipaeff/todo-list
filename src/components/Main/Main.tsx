import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

import Navbar from '../Navbar/Navbar';
import { MainStyles } from './Main.styles';

function Main() {
  return (
    <MainStyles>
      <Navbar />

      <Box sx={{ display: 'flex' }}>
        <TextField sx={{ width: '500px', mr: 1 }} size="small" id="outlined-textarea" label="Что нужно сделать?" />
        <Button color="primary" variant="outlined">
          Добавить
        </Button>
      </Box>
    </MainStyles>
  );
}

export default Main;
