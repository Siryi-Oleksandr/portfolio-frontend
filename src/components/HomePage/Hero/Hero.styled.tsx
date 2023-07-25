import styled from '@emotion/styled';
import { theme } from 'theme';
// IMAGES
import mobileBg from '../../../images/hero-mobile.jpg';
import mobilex2TabletBg from '../../../images/hero-mobile-x2-tablet.jpg';
import tabletx2DesktopBg from '../../../images/hero-tablet-x2-desktop.jpg';
import desktopx2Bg from '../../../images/hero-desktop-x2.jpg';

export const Section = styled.section`
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
  height: 500px;
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
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

export const TextWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: 70px;
  letter-spacing: 4px;
  color: #fff;
  margin-bottom: 80px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 100px;
    font-size: 100px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 120px;
    margin-bottom: 90px;
  }
`;

export const Description = styled.p`
  font-family: ${theme.fonts.text};
  font-size: 23px;
  font-weight: ${theme.fontWeights.title};
  color: #fff;
  margin-bottom: 80px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 30px;
    line-height: 60px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 40px;
    line-height: 80px;
  }
`;
