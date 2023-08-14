import styled from '@emotion/styled';
import { theme } from 'theme';

export const DonationWrapper = styled.div<{ donat: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: row;
  right: ${({ donat }) => (donat ? '0' : '-274px')};
  bottom: 75px;
  transition: ${theme.transition.hover};
  z-index: 100;
`;

export const LinkWrapper = styled.div`
  border-radius: ${theme.radii.tiny};
  border: 2px solid black;
`;

export const DonationBtn = styled.button`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  height: 175px;
  padding: 8px;
  background-color: ${theme.colors.redErrorLight};
  color: ${theme.colors.primary_text_switch};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.m};
  outline: none;
  border: none;
  border-radius: ${theme.radii.tiny};
  cursor: pointer;
`;

export const DonationLink = styled.a`
  position: absolute;
  bottom: 8px;
  right: 72px;
  text-decoration: none;
  font-weight: ${theme.fontWeights.bold};
  font-style: italic;

  @keyframes underline-animation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes underline-fade-out {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.accentColor};
    transition: width 0.3s ease;
  }

  :hover::after {
    animation: underline-animation 0.3s forwards;
  }

  :not(:hover)::after {
    animation: underline-fade-out 0.3s forwards;
  }
`;
