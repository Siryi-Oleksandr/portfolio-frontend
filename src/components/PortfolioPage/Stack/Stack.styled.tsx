import styled from '@emotion/styled';
import { theme } from 'theme';

export const Item = styled.li`
  font-family: ${theme.fonts.title};
  font-size: 24px;
  line-height: normal;
  text-transform: uppercase;
  transition: ${theme.transition.hover};
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 32px;
  }
`;
