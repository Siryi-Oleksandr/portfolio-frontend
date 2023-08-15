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
  justify-content: center;
`;

export const AvatarWrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border: 2px solid ${theme.colors.accentColor};
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const TextWrapper = styled.p`
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 40%;
  }
`;

export const SubscriptionBtn = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: ${theme.colors.redErrorLight80};
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.s};
  line-height: 1.2;
  color: ${theme.colors.white};
  outline: none;
  border: none;
  border-radius: ${theme.radii.tiny};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
