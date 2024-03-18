import { memo, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { IActiveModeTabsProps } from '../../types/Interfaces';

function ActiveModeTabs({ setActiveTab }: IActiveModeTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (setActiveTab) {
      setActiveTab(newValue);
    }
  };

  return (
    <Box sx={{ width: '350px', ml: 'auto' }}>
      <Tabs value={value} onChange={handleChange} centered textColor="primary">
        <Tab label="Все" />
        <Tab label="Активные" />
        <Tab label="Завершенные" />
      </Tabs>
    </Box>
  );
}

export default memo(ActiveModeTabs);
