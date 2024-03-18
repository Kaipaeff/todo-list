import TotalItemsCount from '../TotalItemsCount/TotalItemsCount';
import ActiveModeTabs from '../ActiveModeTabs/ActiveModeTabs';

import { IFiltersProps } from '../../types/Interfaces';
import { FiltersStyles } from './Filters.styles';

import { Divider } from '@mui/material';

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

export default Filters;
