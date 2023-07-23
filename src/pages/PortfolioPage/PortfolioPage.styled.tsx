import styled from '@emotion/styled';
import { theme } from "theme";

export const Container = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

background-color: transparent;

  @media screen and (min-width:  ${theme.breakpoints.mobile}) {
    max-width: 450px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 748px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1400px;
  }
`;