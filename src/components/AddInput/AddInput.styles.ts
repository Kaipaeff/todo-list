import { styled } from 'styled-components';
import ClearIcon from '@mui/icons-material/Clear';
import { borderColor, textColor, deepGrey, lightBlue } from '../../styles/Colors';

export const AddInputStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 640px) {
    width: 93vw;
    margin-bottom: 8px;
  }
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

  @media (max-width: 640px) {
    font-size: 16px;
    height: 32px;
  }
`;

export const ClearIconStyled = styled(ClearIcon)`
  position: absolute;
  cursor: pointer;
  right: 150px;

  @media (max-width: 640px) {
    visibility: hidden;
  }
`;
