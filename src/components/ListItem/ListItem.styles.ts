import { styled } from 'styled-components';
import { EditOutlined, DeleteOutlined, CheckCircleOutline, CancelOutlined } from '@mui/icons-material';

import { blue, borderColor, deepGrey, lightBlue, textColor } from '../../styles/Colors';

export const ListItemStyles = styled.div`
  margin-bottom: 24px;

  @media (max-width: 640px) {
    margin-bottom: 12px;
  }
`;

export const EditOutlinedIconStyles = styled(EditOutlined)`
  color: ${textColor};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }
`;

export const DeleteOutlinedIconStyles = styled(DeleteOutlined)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }

  @media (max-width: 640px) {
    margin-right: 0;
    scale: 0.8;
  }
`;

export const SaveOutlineIconStyles = styled(CheckCircleOutline)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 40px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }

  @media (max-width: 640px) {
    margin-right: 12px;
    margin-left: 12px;
  }
`;

export const CancelOutlineIconStyles = styled(CancelOutlined)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }

  @media (max-width: 640px) {
    margin-right: 0;
  }
`;

export const InputStyles = styled.input`
  width: 500px;
  margin-right: auto;
  height: 42px;
  border-radius: 4px;
  padding: 12px 12px 10px;
  font-size: 18px;
  border: 1px solid ${borderColor};
  color: ${textColor};
  &:focus {
    border-color: ${lightBlue};
    color: ${deepGrey};
  }

  @media (max-width: 640px) {
    height: 32px;
    font-size: 12px;
  }
`;
