import { memo } from 'react';
import Badge from '@mui/material/Badge';

import { ITotalItemsCountProps } from '../../types/Interfaces';
import { TotalItemsCountStyles } from './TotalItemsCount.styles';

function TotalItemsCount({ todo = [] }: ITotalItemsCountProps) {
  const totalCount = todo.length;
  const completedCount = todo.filter(el => el.completed).length;
  const inProgressCount = totalCount - completedCount;

  return (
    <TotalItemsCountStyles>
      <Badge badgeContent={totalCount} color="primary" sx={{ mr: '32px', pr: '12px' }}>
        Всего
      </Badge>
      <Badge badgeContent={inProgressCount} color="warning" sx={{ mr: '32px', pr: '12px' }}>
        В процессе
      </Badge>
      <Badge
        badgeContent={completedCount}
        color="success"
        sx={{
          mr: '32px',
          pr: '12px',
          '@media (max-width: 640px)': {
            marginRight: '0',
          },
        }}
      >
        Выполнено
      </Badge>
    </TotalItemsCountStyles>
  );
}

export default memo(TotalItemsCount);
