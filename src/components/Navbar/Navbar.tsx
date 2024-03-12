import { useState } from 'react';

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { NavbarStyled } from './Navbar.styles';

function Navbar() {
  const [progress, setProgress] = useState(90);
  const [value, setValue] = useState(0);

  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>
          <Typography variant="subtitle1" color="text.secondary">{`Выполнено:`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 2 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="subtitle2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <NavbarStyled>
      <Box sx={{ width: '350px' }}>
        <Tabs value={value} onChange={handleChange} centered textColor="primary">
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершенные" />
        </Tabs>
      </Box>{' '}
      <Box sx={{ width: '30%' }}>
        <LinearProgressWithLabel value={progress} color="primary" />
      </Box>
    </NavbarStyled>
  );
}

export default Navbar;
