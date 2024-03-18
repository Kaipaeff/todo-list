import { styled } from 'styled-components';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';

import { blue, textColor } from '../../styles/Colors';

export const ListItemStyles = styled.div`
  margin-bottom: 24px;
`;

export const EditOutlinedIconStyles = styled(EditOutlined)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 24px;
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
`;
