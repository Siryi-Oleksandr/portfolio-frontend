import styled from '@emotion/styled';
import { theme } from 'theme';

export const TextWrapper = styled.div`
  position: absolute;
  top: 270px;
  right: 26px;
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
  color: #000;
  background-color: ${({ percentage }) => {
    if (percentage === '100') {
      return '#008000';
    } else if (percentage >= '71' && percentage < '100') {
      return 'e7e723';
    } else if (percentage >= '40' && percentage < '71') {
      return 'orange';
    } else if (percentage < '40') {
      return 'red';
    }
  }};
  border-radius: 5px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: -27px;
  right: -5px;
`;
