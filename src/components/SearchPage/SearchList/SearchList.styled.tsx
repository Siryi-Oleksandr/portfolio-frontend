import styled from '@emotion/styled';
import { theme } from 'theme';

export const ListContainer = styled.div`
  width: 100%;
  padding: 70px 15px 0 15px;

  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;

  background-color: transparent;

  /* @media screen and (min-width: ${theme.breakpoints.mobile}) {
    max-width: ${theme.breakpoints.mobile};
  } */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: ${theme.breakpoints.tablet};
    padding: 0 20px;
    padding-top: 70px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
    padding: 0 140px;
    padding-top: 70px;
    padding-bottom: 40px;
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 7px;
`;

export const TotalResults = styled.p`
  display: inline-block;
  padding: 5px;

  transition: ${theme.transition.hover};

  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.normal};
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.m};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 15px;
`;

export const WatchMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 122px;
  height: 42px;
  border: 1px solid ${theme.colors.accentColor};
  border-radius: 4px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  background-color: #404040;
  cursor: pointer;

  font-family: ${theme.fonts.text};
  font-weight: ${theme.fontWeights.heading};
  font-size: ${theme.fontSizes.m};

  color: #fff;
  transition: ${theme.transition.hover};

  :hover,
  :focus {
    transform: scale(1.04);
  }
`;
