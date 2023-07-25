import styled from '@emotion/styled';
import { theme } from 'theme';

export const FooterStyled = styled.footer`
  padding-top: 32px;
  padding-bottom: 32px;
  color: #999;
  text-align: center;
`;

export const Email = styled.a`
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
    bottom: -2px;
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

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    justify-content: space-around;
    margin-bottom: 32px;
  }

  P {
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeights.heading};
  }
`;

export const Socials = styled.ul`
  display: flex;
  gap: 8px;
`;

export const SocialsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;

  border-radius: 50%;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 transparent;
  border: 2px solid transparent;

  transition: all 200ms ease-in-out;

  :hover,
  :focus {
    box-shadow: 0 0 10px 0 ${theme.colors.accentColor} inset,
      0 0 10px 4px ${theme.colors.accentColor};
    border: 2px solid ${theme.colors.accentColor};
  }
`;
