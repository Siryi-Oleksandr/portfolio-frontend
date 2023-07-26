import styled from '@emotion/styled';
import { theme } from 'theme';

export const SocialsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  color: inherit;

  border-radius: 50%;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 transparent;
  border: 2px solid transparent;

  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    box-shadow: 0 0 10px 0 ${theme.colors.accentColor} inset,
      0 0 10px 4px ${theme.colors.accentColor};
    border: 2px solid ${theme.colors.accentColor};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 58px;
    height: 58px;
  }
`;
