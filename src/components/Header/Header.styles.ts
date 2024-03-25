import { styled } from 'styled-components';
import { white } from '../../styles/Colors';

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: ${white};
  box-shadow: 0 4px 12px 3px rgba(2, 9, 51, 0.07);
  z-index: 3;

  @media (max-width: 640px) {
    padding: 0 12px 4px;
    height: 42px;
  }
`;

export const LogoImage = styled.img`
  width: 150px;

  @media (max-width: 640px) {
    width: 90px;
    margin-right: 24px;
  }
`;

export const HeaderContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 100%;

  @media (max-width: 640px) {
    width: 100vw;
    padding: 0 12px;
  }
`;

export const ControlPanelStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-left: auto;
  width: 400px;

  @media (max-width: 640px) {
    gap: 8px;
    width: 100vw;
  }
`;
