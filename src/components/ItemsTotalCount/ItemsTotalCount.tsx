import { useState } from 'react';
import { ItemsTotalCountStyles, ItemsCountStyles } from './ItemsTotalCount.styles';

function ItemsTotalCount() {
  const [items, setItems] = useState(20);
  return (
    <ItemsTotalCountStyles>
      <ItemsCountStyles>Всего: {items}</ItemsCountStyles>
      <ItemsCountStyles>В процессе: 3</ItemsCountStyles>
      <ItemsCountStyles>Выполнено: 17</ItemsCountStyles>
    </ItemsTotalCountStyles>
  );
}

export default ItemsTotalCount;
