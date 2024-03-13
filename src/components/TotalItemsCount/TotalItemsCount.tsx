import Badge from '@mui/material/Badge';
import { TotalItemsCountStyles } from './TotalItemsCount.styles';

function TotalItemsCount() {
  return (
    <>
      <Badge badgeContent={19} color="primary" sx={{ mr: '32px', pr: '12px' }}>
        <TotalItemsCountStyles>Всего</TotalItemsCountStyles>
      </Badge>
      <Badge badgeContent={4} color="warning" sx={{ mr: '32px', pr: '12px' }}>
        <TotalItemsCountStyles>В процессе</TotalItemsCountStyles>
      </Badge>
      <Badge badgeContent={15} color="success" sx={{ mr: '32px', pr: '12px' }}>
        <TotalItemsCountStyles>Выполнено</TotalItemsCountStyles>
      </Badge>
    </>
  );
}

export default TotalItemsCount;
