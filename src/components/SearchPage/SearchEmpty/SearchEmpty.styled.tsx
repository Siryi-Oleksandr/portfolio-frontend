import styled from '@emotion/styled';
import { theme } from 'theme';
import { BsKeyboardFill } from 'react-icons/bs';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Wrapper = styled.div`
  padding-top: 40px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconKeyboard = styled(BsKeyboardFill)`
  width: 75px;
  height: 75px;

  transition: ${theme.transition.hover};
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100px;
    height: 100px;
  }
`;

export const IconArrow = styled(MdKeyboardArrowUp)`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 35px;

  transition: ${theme.transition.hover};
  color: ${theme.colors.primary_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 55px;
    height: 55px;
    top: -20px;
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.text};
  font-weight: ${theme.fontWeights.heading};
  font-size: ${theme.fontSizes.l};

  transition: ${theme.transition.hover};
  color: ${theme.colors.second_text_switch};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 25px;
  }
`;
