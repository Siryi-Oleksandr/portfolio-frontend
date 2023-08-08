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
  color: ${theme.colors.primary_text_switch};
  background-color: ${({ percentage }) => {
    const numericPercentage = +percentage;

    if (numericPercentage === 100) {
      return '#008000';
    } else if (numericPercentage >= 70 && numericPercentage < 100) {
      return '#e7e723';
    } else if (numericPercentage >= 37 && numericPercentage < 70) {
      return '#ffa500';
    } else if (numericPercentage < 37) {
      return '#ff0000';
    }
  }};
  border-radius: 5px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: -27px;
  right: -5px;
`;
