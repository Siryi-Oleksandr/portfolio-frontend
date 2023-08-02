import styled from '@emotion/styled';
import { theme } from 'theme';

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: start;
  padding: 20px 20px;
  gap: ${theme.gaps.medium}px;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

export const Avawrap = styled.div`
  width: 50px;
  height: 50px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.radii.round};
  }
`;

export const AboutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const AboutText = styled.p`
  color: ${theme.colors.primary_text_switch};
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.m};
  text-align: start;
  word-spacing: 0.2em;
`;

export const AvatarImg = styled.img`
  border: 2px solid ${theme.colors.primary_text_switch};
  margin-right: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  overflow: hidden;
  display: block;
  height: auto;
  align-self: safe;
  justify-content: flex-start;
`;

export const TextName = styled.p`
  color: ${theme.colors.accent_color_switch};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.s};
`;

export const TextProfession = styled.p`
  color: ${theme.colors.second_text_switch};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.s};
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 20px;
  background-color: inherit;
  color: ${theme.colors.primary_text_switch};
  transition: ${theme.transition.hover};
  &:hover {
    color: ${theme.colors.accentColor};
    transform: scale(1.2);
  }
`;
