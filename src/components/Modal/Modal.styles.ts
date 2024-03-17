import styled from 'styled-components';
import { white } from '../../styles/Colors';

export const ModalOverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 200px;
  background-color: ${white};
  padding: 50px 20px;
  border-radius: 12px;
`;
