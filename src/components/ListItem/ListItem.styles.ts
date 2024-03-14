import { styled } from 'styled-components';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { blue, textColor } from '../../styles/Colors';

export const ListItemStyles = styled.div`
  margin-bottom: 24px;
`;

export const EditOutlinedIconStyles = styled(EditOutlinedIcon)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }
`;

export const DeleteOutlinedIconStyles = styled(DeleteOutlinedIcon)`
  color: ${textColor};
  cursor: pointer;
  margin-right: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${blue};
  }
`;
