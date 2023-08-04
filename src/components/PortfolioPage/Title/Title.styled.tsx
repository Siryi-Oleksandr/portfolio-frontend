import styled from '@emotion/styled';
import { theme } from 'theme';

export const Title = styled.h2`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.primary_text_switch};
  font-family: ${theme.fonts.title};
  font-size: 32px;
  text-align: left;
  line-height: normal;
  letter-spacing: 0.64px;
  text-transform: uppercase;
  transition: ${theme.transition.hover};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 40px;
    letter-spacing: 0.8px;
  }
`;

export const Number = styled.span`
  color: ${theme.colors.accentColor};
  font-family: ${theme.fonts.title};
  font-size: 64px;
  line-height: normal;
  letter-spacing: 1.28px;
  text-transform: uppercase;
`;
