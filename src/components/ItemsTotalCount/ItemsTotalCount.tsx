import { useState } from 'react';
import { ItemsTotalCountStyles } from './ItemsTotalCount.styles';

function ItemsTotalCount() {
  const [items, setItems] = useState(5);
  return (
    <>
      <ItemsTotalCountStyles>Количество задач: {items}</ItemsTotalCountStyles>
    </>
  );
}

export default ItemsTotalCount;
