import styled from '@emotion/styled';
import { theme } from 'theme';

export const Container = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;

  background-color: transparent;

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.breakpoints.mobile};
    padding: 0 15px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.breakpoints.tablet};
    padding: 0 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
    padding: 0 150px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.1)
  );
  background-color: #404040;
  border-top: solid 1px #949494;
`;

export const Main = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;
