import { memo, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { IActiveModeTabsProps } from '../../types/Interfaces';
import { ActiveModeTabsStyles } from './ActiveModeTabs.styles';

function ActiveModeTabs({ setActiveTab }: IActiveModeTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (setActiveTab) {
      setActiveTab(newValue);
    }
  };

  return (
    <ActiveModeTabsStyles>
      <Tabs value={value} onChange={handleChange} centered textColor="primary">
        <Tab label="Все" />
        <Tab label="Активные" />
        <Tab label="Завершенные" />
      </Tabs>
    </ActiveModeTabsStyles>
  );
}

export default memo(ActiveModeTabs);
