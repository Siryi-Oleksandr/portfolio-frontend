import styled from '@emotion/styled';
import { theme } from 'theme';

export const Btn = styled.button`
  display: inline-block;
  width: fit-content;
  padding: 8px 16px;
  background-color: ${theme.colors.accentColor};
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.s};
  line-height: 1.2;
  color: ${theme.colors.white};
  outline: none;
  border: none;
  border-radius: ${theme.radii.tiny};

  transition: ${theme.transition.hover};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 14px 24px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
