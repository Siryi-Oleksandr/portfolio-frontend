import styled from '@emotion/styled';
import { theme } from 'theme';
// IMAGE
import heroBg from '../../../images/hero-bg-image.jpg';

export const Section = styled.section`
  /* background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  background-color: black;
  height: 500px;
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 600px;
  }
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: ${theme.fontSizes.xl};
  color: #fff;
  margin-bottom: 80px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 120px;
    font-size: 60px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 75px;
  }
`;

export const Description = styled.p`
  font-family: ${theme.fonts.text};
  font-size: 22px;
  font-weight: ${theme.fontWeights.title};
  color: #fff;
  margin-bottom: 80px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Button = styled.button`
  width: 130px;
  height: 44px;
  border-radius: 5px;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;

  transition: ${theme.transition.hover};

  &:hover,
  &:focus {
    background-color: ${theme.colors.accentColor};
    transform: scale(1.1);
    color: #fff;
  }
`;
