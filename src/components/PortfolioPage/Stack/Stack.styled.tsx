import styled from '@emotion/styled';
import { theme } from 'theme';

export const Item = styled.li`
  padding: 8px 16px;
  font-family: ${theme.fonts.title};
  font-size: 24px;
  line-height: normal;
  text-transform: uppercase;
  transition: ${theme.transition.hover};
  color: ${theme.colors.primary_text_switch};
  border: 1px solid ${theme.colors.accentColor};
  border-radius: ${theme.radii.medium};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;
