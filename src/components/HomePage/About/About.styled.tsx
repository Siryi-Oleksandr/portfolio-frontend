import styled from '@emotion/styled';
import { theme } from 'theme';

export const Section = styled.section`
  padding: 40px 0;
`;

export const Title = styled.h2`
  margin: 0 auto;
  font-family: ${theme.fonts.title};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.primary_text_switch};
  margin-bottom: 30px;
  text-align: center;

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
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    :last-child {
      flex-direction: row-reverse;
    }
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${theme.radii.medium};
  overflow: hidden;
  margin-bottom: 15px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 800px;
  }
`;

export const AboutTitle = styled.h3`
  font-family: ${theme.fonts.title};
  display: inline-block;
  border-radius: ${theme.radii.medium};
  padding: 5px 15px;
  background-color: ${theme.colors.accentColor};
  font-size: 22px;
  color: #fff;
  margin-bottom: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 26px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 45px;
    margin-bottom: 100px;
  }
`;

export const AboutText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: 18px;
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 30px;
    margin-bottom: 150px;
  }
`;
