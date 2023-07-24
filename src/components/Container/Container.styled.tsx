import styled from '@emotion/styled';
import { theme } from 'theme';

export const ContainerWrapper = styled.div`
  width: 100%;
  padding: 0 15px;

  margin-left: auto;
  margin-right: auto;

  background-color: transparent;

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.breakpoints.tablet};
    padding: 0 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
  }
`;
