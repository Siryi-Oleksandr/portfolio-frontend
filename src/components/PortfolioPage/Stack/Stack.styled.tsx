import styled from '@emotion/styled';
import { theme } from 'theme';

export const Item = styled.li`
  padding: 6px 10px;
  font-family: ${theme.fonts.title};
  font-size: 20px;
  line-height: normal;
  text-transform: uppercase;
  transition: ${theme.transition.hover};
  color: ${theme.colors.primary_text_switch};
  border: 1px solid ${theme.colors.accentColor};
  border-radius: ${theme.radii.medium};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 6px 12px;
    font-size: 28px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 8px 16px;
    font-size: 32px;
  }
`;
