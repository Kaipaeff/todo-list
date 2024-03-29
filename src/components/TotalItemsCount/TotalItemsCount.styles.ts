import { styled } from 'styled-components';
import { blue } from '../../styles/Colors';

export const TotalItemsCountStyles = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${blue};

  @media (max-width: 640px) {
    display: flex;
    margin: 12px auto 0;
    display: none;
  }
`;
