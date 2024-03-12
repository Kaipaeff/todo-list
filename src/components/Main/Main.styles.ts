import { styled } from 'styled-components';
import { borderColor, white } from '../../styles/Colors';

export const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 1200px;
  height: 700px;
  padding: 20px;
  margin-top: 140px;
  border: 1px solid ${borderColor};
  border-radius: 32px;
  background-color: ${white};
  // box-shadow: 0px 16px 24px 6px rgba(2, 9, 51, 0.439); //для темной темы
  /* box-shadow: 0px 18px 32px 2px rgba(2, 9, 51, 0.25); //для светлой темы */
`;
