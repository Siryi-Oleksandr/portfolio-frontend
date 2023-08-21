import styled from '@emotion/styled';
import { theme } from 'theme';
// import { ReactComponent as CloseIcon } from '../../icons/x-close.svg';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px 18px;
  max-width: 90%;
  min-width: 250px;
  min-height: 160px;
  max-height: 90vh;
  box-sizing: border-box;
  border: ${theme.borders.normal} rgba(220, 227, 229, 0.8);
  background-color: ${theme.colors.second_background_switch};
  border-radius: ${theme.radii.small};
  box-shadow: 0px 4px 16px 0px #1111111a;
  border-color: ${theme.colors.modal_border_color};
  overflow-y: auto;

  opacity: ${({ showModal }) => (showModal ? '1' : '0')};
  transform: ${({ showModal }) => (showModal ? 'scale(1)' : 'scale(0.9)')};
  transition: opacity 200ms ease, transform 250ms ease;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.second_text_switch};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent_color_switch};
    border-radius: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 28px;
    min-width: 396px;
    min-height: 160px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  color: ${theme.colors.primary_text_switch};
  top: 14px;
  right: 14px;
  display: block;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;
  transition: ${theme.transition.hover};
  &:hover {
    color: ${theme.colors.accent_color_switch};
    transform: scale(1.2);
  }
`;
