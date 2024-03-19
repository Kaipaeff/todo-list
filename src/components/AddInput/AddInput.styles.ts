import { styled } from 'styled-components';
import { borderColor, textColor, deepGrey, lightBlue } from '../../styles/Colors';

export const AddInputStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const InputStyles = styled.input`
  width: 500px;
  margin-right: 8px;
  height: 39px;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${borderColor};
  color: ${textColor};
  &:focus {
    border-color: ${lightBlue};
    color: ${deepGrey};
  }
`;
