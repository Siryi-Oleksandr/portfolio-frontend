import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'theme';
import { BsArrowRight } from 'react-icons/bs';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${theme.colors.accentColor};
  border-radius: 6px;
  padding: 13px 20px 13px 10px;

  transition: ${theme.transition.hover};
  background-color: ${theme.colors.second_background_switch};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 50px;
    height: 50px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NameLink = styled(Link)`
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.heading};
  font-size: ${theme.fontSizes.m};
  color: ${theme.colors.primary_text_switch};
  transition: ${theme.transition.hover};

  :hover,
  :focus {
    text-decoration: underline;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.l};
  }
`;

export const Profession = styled.p`
  font-family: ${theme.fonts.text};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.second_text_switch};
  transition: ${theme.transition.hover};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.s};
  }
`;

export const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 5px;

  transition: ${theme.transition.hover};

  :hover,
  :focus {
    border-color: ${theme.colors.accentColor};
  }
`;

export const ArrowLink = styled(BsArrowRight)`
  width: 30px;
  height: 30px;
  fill: ${theme.colors.accentColor};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`;
