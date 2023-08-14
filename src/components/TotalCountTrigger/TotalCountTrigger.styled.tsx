import styled from '@emotion/styled';
import { theme } from 'theme';

export const TriggerWrapper = styled.div`
  position: relative;
`;

export const InfoWrapper = styled.div<{ showInfo: boolean }>`
  position: absolute;
  padding: 2px;
  width: 100px;
  pointer-events: none;
  background-color: ${theme.colors.textarea};
  border-radius: 4px;
  text-align: center;

  opacity: ${({ showInfo }) => (showInfo ? '1' : '0')};
  transform: ${({ showInfo }) =>
    showInfo
      ? 'translateX(-102%) translateY(-137%)'
      : 'translateX(-92%) translateY(-115%)'};

  transition: opacity 150ms ease-in-out, transform 250ms ease-in-out;

  z-index: 100;
`;

export const InfoText = styled.p`
  font-family: ${theme.fonts.text};
  font-size: 11px;
  color: #000;
`;

export const TotalUsers = styled.div`
  padding: 4px 16px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.tagBgColor};
  font-family: ${theme.fonts.text};
  font-size: 25px;
  font-weight: ${theme.fontWeights.bold};
  text-decoration: none;
  border-radius: 16px;
  border: 2px solid ${theme.colors.accentColor};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 1px 1px 25px 10px ${theme.colors.accentColor40};

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      ${theme.colors.accentColor40},
      transparent
    );
    animation: slideAnimation 2100ms linear infinite;
  }

  @keyframes slideAnimation {
    0%,
    100% {
      left: -200%;
    }
    50% {
      left: 200%;
    }
  }
`;
