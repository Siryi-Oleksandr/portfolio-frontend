import styled from '@emotion/styled';
import { theme } from 'theme';

export const TriggerWrapper = styled.div`
  position: relative;
`;

export const Text = styled.p`
  cursor: pointer;
  padding: 3px;
  font-family: ${theme.fonts.text};
  border-radius: 4px;
  background-color: ${theme.colors.textarea};
  color: #000;
  font-size: 13px;
`;

export const InfoWrapper = styled.div<{ showInfo: boolean }>`
  position: absolute;
  padding: 7px;
  width: 200px;
  pointer-events: none;
  border: 1px solid ${theme.colors.accentColor};
  background-color: ${theme.colors.textarea};
  border-radius: 4px;
  text-align: start;
  opacity: ${({ showInfo }) => (showInfo ? '1' : '0')};
  transform: translateX(-50%) translateY(-109%);

  transition: opacity 150ms ease-in-out, transform 250ms ease-in-out;

  z-index: 100;

  @media screen and (min-width: 600px) {
    transform: translateX(-101%) translateY(-100%);
  }
`;

export const InfoText = styled.div`
  font-family: ${theme.fonts.text};
  font-size: 11px;
  color: #000;
`;
