import TotalItemsCount from '../TotalItemsCount/TotalItemsCount';
import ActiveModeTabs from '../ActiveModeTabs/ActiveModeTabs';

import { IFiltersProps } from '../../types/Interfaces';
import { FiltersStyles } from './Filters.styles';

import { Divider } from '@mui/material';

function Filters({ todo }: IFiltersProps) {
  return (
    <>
      <FiltersStyles>
        <TotalItemsCount todo={todo} />
        <ActiveModeTabs />
      </FiltersStyles>
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
    </>
  );
}

export default Filters;
