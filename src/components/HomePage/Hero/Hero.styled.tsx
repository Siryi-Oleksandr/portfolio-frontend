import styled from '@emotion/styled';
import { theme } from 'theme';

export const Section = styled.section`
  /* background-image: url('../../../images/hero-bg-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  background-color: black;
  height: 600px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: ${theme.fontSizes.xl};
  color: #fff;
  margin-bottom: 40px;
`;

export const Description = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.title};
  color: #fff;
  margin-bottom: 80px;
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
