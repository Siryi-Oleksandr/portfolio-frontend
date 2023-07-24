import styled from '@emotion/styled';
import { theme } from 'theme';

export const FooterStyled = styled.footer`
  padding-top: 32px;
  padding-bottom: 32px;
  color: #999;
  text-align: center;

  a {
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    justify-content: space-around;
    margin-bottom: 32px;
  }
`;
