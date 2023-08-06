import styled from '@emotion/styled';
import { theme } from 'theme';

export const TextWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
`;

export const Text = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.m};
  }
`;

export const Percentage = styled.span`
  padding: 3px 7px 3px 7px;
  color: #fff;
  background-color: ${theme.colors.accentColor};
  border-radius: 5px;
`;
