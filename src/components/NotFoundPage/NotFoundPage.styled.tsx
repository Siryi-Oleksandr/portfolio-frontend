import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';
import { theme } from 'theme';

const rotateAnimation = keyframes`
   0% {
    transform: rotate(0deg);
  }
 
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NumberLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export const NumberText = styled.p`
  font-family: ${theme.fonts.title};
  font-size: 100px;

  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 120px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  animation: ${rotateAnimation} 10s linear infinite;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 125px;
  }
`;

export const NotFoundText = styled.p`
  font-family: ${theme.fonts.title};
  font-size: 30px;
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 35px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
`;

export const InfoText = styled.p`
  line-height: 25px;
  font-family: ${theme.fonts.text};
  font-size: 18px;
  margin-bottom: 40px;
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 25px;
  }
`;

export const NavigateText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: 18px;
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 25px;
  }
`;

export const HomeLink = styled(Link)`
  color: ${theme.colors.accentColor};
  font-weight: ${theme.fontWeights.bold};

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
