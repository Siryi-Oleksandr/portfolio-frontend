import styled from '@emotion/styled';
import { theme } from 'theme';

export const SubWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.breakpoints.tablet};
    padding: 24px 50px;
  }
`;
