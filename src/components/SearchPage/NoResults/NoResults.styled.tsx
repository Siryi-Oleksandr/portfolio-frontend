import styled from '@emotion/styled';
import { theme } from 'theme';
import { FiUserX } from 'react-icons/fi';

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

export const IconKeyboard = styled(FiUserX)`
  width: 90px;
  height: 90px;

  transition: ${theme.transition.hover};
  color: ${theme.colors.accentColor};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 105px;
    height: 105px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 110px;
    height: 110px;
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.text};
  font-weight: ${theme.fontWeights.heading};
  font-size: 25px;

  transition: ${theme.transition.hover};
  color: ${theme.colors.accentColor};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 30px;
  }
`;
