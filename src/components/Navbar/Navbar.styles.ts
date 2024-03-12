import { styled } from 'styled-components';
import { borderColor, textColor } from '../../styles/Colors';

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 32px;
  margin-bottom: 24px;
  border: 1px solid ${borderColor};
  border-radius: 12px;
  color: ${textColor};
`;
