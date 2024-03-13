import ActiveModeTabs from '../ActiveModeTabs/ActiveModeTabs';
import TotalItemsCount from '../TotalItemsCount/TotalItemsCount';

import { FiltersStyles } from './Filters.styles';

import { Divider } from '@mui/material';

function Filters() {
  return (
    <>
      <FiltersStyles>
        <TotalItemsCount />
        <ActiveModeTabs />
      </FiltersStyles>
      <Divider variant="fullWidth" sx={{ mb: '24px' }} />
    </>
  );
}

export default Filters;
