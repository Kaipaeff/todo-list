import { styled } from 'styled-components';

export const FiltersStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
