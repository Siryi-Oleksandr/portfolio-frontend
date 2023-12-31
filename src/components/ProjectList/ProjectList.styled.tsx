import styled from '@emotion/styled';
import { theme } from 'theme';

export const List = styled.ul`
  padding-top: 35px;
  padding-bottom: 35px;

  display: flex;
  flex-wrap: wrap;
  gap: ${theme.gaps.medium}px;
  justify-content: space-between;
  width: 100%;
`;
