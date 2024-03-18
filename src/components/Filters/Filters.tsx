import { memo } from 'react';
import { Divider } from '@mui/material';

import TotalItemsCount from '../TotalItemsCount/TotalItemsCount';
import ActiveModeTabs from '../ActiveModeTabs/ActiveModeTabs';

import { IFiltersProps } from '../../types/Interfaces';
import { FiltersStyles } from './Filters.styles';

function Filters({ todo, setActiveTab }: IFiltersProps) {
  return (
    <>
      <FiltersStyles>
        <TotalItemsCount todo={todo} />
        <ActiveModeTabs setActiveTab={setActiveTab} />
      </FiltersStyles>
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
    </>
  );
}

export default memo(Filters);
