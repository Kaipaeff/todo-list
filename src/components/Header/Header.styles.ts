import { styled } from 'styled-components';
import { white } from '../../styles/Colors';

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${white};
  box-shadow: 0 4px 12px 3px rgba(2, 9, 51, 0.15);
  /* z-index: 2; */
`;

export const LogoImage = styled.img`
  width: 150px;
`;
