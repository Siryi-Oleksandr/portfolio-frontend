import styled from '@emotion/styled';
import { theme } from 'theme';

export const List = styled.ul`
  padding-top: 25px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 75%;
  }
`;
