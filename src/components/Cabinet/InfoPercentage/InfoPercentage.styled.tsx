import styled from '@emotion/styled';
import { green } from '@mui/material/colors';
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

export const Percentage = styled.span<{ percentage: string }>`
  padding: 3px 7px 3px 7px;
  color: #fff;
  background-color: ${p => {
    if (p.percentage === '100') {
      return 'green';
    } else if (p.percentage >= '71' && p.percentage < '100') {
      return 'yellow';
    } else if (p.percentage >= '40' && p.percentage < '71') {
      return 'orange';
    } else if (p.percentage < '40') {
      return 'red';
    }
  }};
  border-radius: 5px;
`;
