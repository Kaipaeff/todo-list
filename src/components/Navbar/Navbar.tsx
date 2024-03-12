import { useState } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';

import { NavbarStyled } from './Navbar.styles';

function Navbar() {
  const [progress, setProgress] = useState(67);

  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{mr: 1}}>
          <Typography variant="body2" color="text.secondary">{`Completed:`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 2 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary" >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <NavbarStyled>
      All Tasks | Active Tasks | Completed Tasks
      <Box sx={{ width: '30%' }}>
        <LinearProgressWithLabel value={progress} color="success" />
      </Box>
    </NavbarStyled>
  );
}

export default Navbar;
