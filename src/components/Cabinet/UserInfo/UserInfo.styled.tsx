import styled from '@emotion/styled';
import { theme } from 'theme';
import { Btn } from 'components/Buttons/MainBtn.styled';

import mobilex2TabletBg from 'images/hero-mobile-x2-tablet.jpg';
import tabletx2DesktopBg from 'images/hero-tablet-x2-desktop.jpg';
import desktopx2 from 'img/Bg.jpg';

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 20px 120px;
  gap: ${theme.gaps.big}px;

  background-image: url(${mobilex2TabletBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    padding: 20px 80px;
  }
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    flex-direction: column;
    padding: 20px 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    background-image: url(${tabletx2DesktopBg});
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    background-image: url(${desktopx2});
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  @media screen and (max-width: 1200px) {
    max-width: 250px;
  }
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    max-width: 220px;
  }

  gap: 8px;
`;

export const Avawrap = styled.div`
  width: 200px;
  height: 200px;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.radii.round};
  }
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 550px) {
    width: 120px;
    height: 120px;
  }
`;

export const AboutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const AboutText = styled.p`
  color: ${theme.colors.lightGray};
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.l};
  text-align: start;
  word-spacing: 0.2em;
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    font-size: ${theme.fontSizes.m};
  }
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
  font-size: ${theme.fontSizes.m};
`;

export const TextProfession = styled.p`
  color: ${theme.colors.second_text_switch};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.m};
  text-align: center;
  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.xs};
  }
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    font-size: ${theme.fontSizes.xs};
  }
`;

export const EditBtn = styled(Btn)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
  line-height: 1;
  font-size: ${theme.fontSizes.l};

  background-color: ${theme.colors.second_text_switch};
  color: ${theme.colors.accent_color_switch};
  transition: ${theme.transition.hover};
  &:hover {
    color: ${theme.colors.auth_button_color_switch};
    background-color: ${theme.colors.accent_color_switch};
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 2px;
    padding-bottom: 2px;
  }
`;

export const SubscriptionBtn = styled.button`
  position: absolute;
  top: 38px;
  left: 44px;
  padding: 4px 8px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.tagBgColor};
  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.s};
  text-decoration: none;
  border-radius: 16px;
  border: 2px solid ${theme.colors.accentColor};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: 550px) {
    left: 60px;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 44px;
    left: 70px;
    padding: 8px 16px;
    font-size: ${theme.fontSizes.m};
  }

  :hover {
    box-shadow: 1px 1px 25px 10px ${theme.colors.accentColor40};
  }

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
    transition: all 650ms;
  }

  :hover:before {
    left: 100%;
  }
`;
export const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: ${theme.gaps.big}px;

  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    flex-direction: column;
  }
`;
