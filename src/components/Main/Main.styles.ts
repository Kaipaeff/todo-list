import { styled } from 'styled-components';
import { borderColor, white } from '../../styles/Colors';

export const MainStyles = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 760px;
  padding: 20px;
  margin-top: 130px;
  border: 1px solid ${borderColor};
  border-radius: 32px;
  background-color: ${white};
  box-shadow: 0px 14px 18px 0 rgba(2, 9, 51, 0.18);

  @media (max-width: 640px) {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100vw;
    margin-top: 40px;
    border-radius: 0;
    padding: 8px 12px;
  }
`;
