import styled from '@emotion/styled';
import { theme } from 'theme';

export const Section = styled.section`
  padding: 40px 0;
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${theme.fonts.title};
  font-size: 45px;
  color: ${theme.colors.primary_text_switch};
  margin-bottom: 30px;
  text-align: center;

  transition: ${theme.transition.hover};

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    width: 300px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 60px;
  }
`;

export const AboutItem = styled.li`
  text-align: center;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    :nth-of-type(odd) {
      text-align: start;
    }

    :nth-of-type(even) {
      text-align: end;
      flex-direction: row-reverse;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 500px;
  background-color: lightgray;
  border: 1px solid ${theme.colors.accentColor};
  border-radius: ${theme.radii.medium};
  overflow: hidden;

  & img {
    display: block;
    height: 100%;
    width: 100%;

    /* object-fit: cover; */
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: calc(50% - 20px);
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 15px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: calc(50% - 20px);
    margin: 0;
  }
`;

export const ItemNumber = styled.p`
  letter-spacing: 3px;
  font-family: ${theme.fonts.title};
  font-weight: ${theme.fontWeights.bold};
  font-size: 70px;
  color: ${theme.colors.accentColor};
`;

export const AboutTitle = styled.h3`
  font-family: ${theme.fonts.title};
  letter-spacing: 2px;
  display: inline-block;
  border-radius: ${theme.radii.medium};
  padding: 5px 15px;
  background-color: ${theme.colors.accentColor};
  font-size: 27px;
  color: #fff;
  margin-bottom: 3px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 27px;
    /* margin-bottom: 30px; */
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 44px;
    /* margin-bottom: 50px; */
  }
`;

export const AboutText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.l};
  color: ${theme.colors.primary_text_switch};
  margin-top: 12px;

  transition: ${theme.transition.hover};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 24px;
    margin-top: 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 30px;
  }
`;
