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
  padding: 4px;
  width: 130px;
  border: 1px solid ${theme.colors.accentColor};
  pointer-events: none;
  background-color: ${theme.colors.textarea};
  border-radius: 4px;
  text-align: center;

  opacity: ${({ showInfo }) => (showInfo ? '1' : '0')};
  transform: translateX(-102%) translateY(-137%);

  transition: opacity 150ms ease-in-out, transform 250ms ease-in-out;

  z-index: 100;
`;

export const InfoText = styled.div`
  font-family: ${theme.fonts.text};
  font-size: 11px;
  color: #000;
`;
