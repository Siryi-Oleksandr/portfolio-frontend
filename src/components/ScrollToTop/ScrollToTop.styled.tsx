import styled from '@emotion/styled';
import { theme } from 'theme';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

interface isScrollBtnVisible {
  isVisible: boolean;
}

export const ScrollBtn = styled.button<isScrollBtnVisible>`
  position: fixed;
  bottom: 18px;
  right: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 50px;
  height: 50px;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: ${({ isVisible }) => (isVisible ? 'scale(1)' : 'scale(0.5)')};

  transition: opacity 300ms ease, transform 300ms ease;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 70px;
    height: 70px;
  }
`;

export const ArrowIcon = styled(BsFillArrowUpCircleFill)`
  width: 100%;
  height: 100%;

  color: ${theme.colors.accentColor};
  opacity: 1;
  transition: opacity 300ms ease;

  :hover,
  :focus {
    opacity: 0.8;
  }
`;
