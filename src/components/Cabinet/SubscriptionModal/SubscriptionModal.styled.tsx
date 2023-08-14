import styled from '@emotion/styled';
import { theme } from 'theme';

export const SubscriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 750px;
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.m};
  }
`;

export const SubscriptionList = styled.ul`
  list-style: square;
  margin-left: 32px;
`;

export const Link = styled.a`
  position: relative;
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

export const SubscriptionBtn = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
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

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 14px 24px;
    font-size: ${theme.fontSizes.m};
  }

  &:hover {
    transform: scale(1.05);
  }
`;
