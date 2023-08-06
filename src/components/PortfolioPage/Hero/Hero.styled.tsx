import styled from '@emotion/styled';
import { theme } from 'theme';
// IMAGES
import mobileBg from 'images/hero-mobile.jpg';
import mobilex2TabletBg from 'images/hero-mobile-x2-tablet.jpg';
import tabletx2DesktopBg from 'images/hero-tablet-x2-desktop.jpg';
import desktopx2Bg from 'images/hero-desktop-x2.jpg';

export const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;

  display: flex;
  align-items: center;

  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 150px;
    padding-bottom: 150px;
    height: 600px;
    background-image: url(${mobilex2TabletBg});
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 600px;
    background-image: url(${tabletx2DesktopBg});
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobilex2TabletBg});

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      background-image: url(${tabletx2DesktopBg});
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      background-image: url(${desktopx2Bg});
    }
  }
`;

export const HeroInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 25px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 25px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const FullName = styled.h1`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 25px;
  }
`;

export const MediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const HeroName = styled.span`
  display: inline-block;
  font-family: ${theme.fonts.title};
  font-size: 42px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 60px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 80px;
  }
`;

export const HeroSurname = styled(HeroName)`
  margin-right: 0;
  border-right: 1px solid ${theme.colors.accentColor};
`;

export const SubTitle = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 24px;
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  line-height: calc(30 / 24);
  letter-spacing: -0.96px;
  color: ${theme.colors.accentColor};

  & > span {
    color: ${theme.colors.white};
  }
`;

export const Proffecion = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-style: normal;
  font-weight: ${theme.fontWeights.bold};
  line-height: calc(30 / 16);
  letter-spacing: -0.64px;
  color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: calc(30 / 20);
    letter-spacing: -0.96px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
    line-height: calc(30 / 24);
  }
`;

export const Avawrap = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.radii.medium};
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

export const AvatarImg = styled.img`
  border: 2px solid ${theme.colors.primary_text_switch};
  margin-right: 8px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  display: block;
  height: auto;
  align-self: safe;
  justify-content: flex-start;
`;
