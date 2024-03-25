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

  @media (max-width: 640px) {
    padding: 12px 6px 100px;
  }
`;

export const TodoListItemsStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2px;
  overflow: auto;
`;
