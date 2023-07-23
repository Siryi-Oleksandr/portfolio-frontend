import styled from '@emotion/styled';
import { theme } from 'theme';

export const FooterStyled = styled.footer`
  padding-top: 32px;
  padding-bottom: 32px;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #999;
  background-color: #3f3f3f;
  text-align: center;
  border-top: solid 1px #949494;

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
