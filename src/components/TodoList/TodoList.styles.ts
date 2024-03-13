import { styled } from 'styled-components';
import { borderColor } from '../../styles/Colors';

export const TodoListStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 12px 24px 24px;
  border: 1px solid ${borderColor};
  border-radius: 12px;
  overflow: auto;
`;

export const TodoListItemsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2px;
  overflow: auto;
`;
