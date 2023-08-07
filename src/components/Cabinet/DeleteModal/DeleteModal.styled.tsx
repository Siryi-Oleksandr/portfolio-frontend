import styled from '@emotion/styled';
import { theme } from 'theme';

export const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;
export const DeleteModalBtn = styled.button`
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.primary_text_switch};
  color: ${theme.colors.background_switch};
  transition: ${theme.transition.hover};
  &:hover {
    background-color: ${theme.colors.accent_color_switch};
    transform: scale(1.2);
  }
`;
export const DeleteText = styled.p`
  margin-top: 12px;
  color: ${theme.colors.accent_color_switch};
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.m};
  }
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    font-size: ${theme.fontSizes.xs};
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 100px;
`;
