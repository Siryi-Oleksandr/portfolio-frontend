import styled from '@emotion/styled';
import { theme } from 'theme';

export const ListContainer = styled.div`
  width: 100%;
  padding: 0 15px;

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
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
    padding: 0 140px;
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;
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
  padding: 8px 16px;
`;
