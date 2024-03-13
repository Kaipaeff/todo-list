import { useState } from 'react';

import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function ActiveModeTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '350px' }}>
      <Tabs value={value} onChange={handleChange} centered textColor="primary">
        <Tab label="Все" />
        <Tab label="Активные" />
        <Tab label="Завершенные" />
      </Tabs>
    </Box>
  );
}

export default ActiveModeTabs;
