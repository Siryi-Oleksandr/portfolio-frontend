import styled from '@emotion/styled';
import { theme } from "theme";

export const Item = styled.li`
 width: 100%;
 padding: 1.2em;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }

  /* @media screen and (min-width: ${theme.breakpoints.desktop}) {
   width: 33%;
  } */

 &:hover {
    
    .nested-component {
     transform: translatey(0);
    }
  }
`;

export const Bar = styled.div`
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;

 width: 100%;
 height: 24px;
 background-color: ${theme.colors.mediumtGray};
 color: ${theme.colors.second_text_switch};
border-top-right-radius: ${theme.radii.tiny};
border-top-left-radius: ${theme.radii.tiny};
 z-index: 10;
`;

export const Title = styled.h2`
font-family: ${theme.fonts.title};
 font-size: ${theme.fontSizes.xs};
 text-transform: uppercase;
 font-weight: ${theme.fontWeights.bold};
 line-height: 1.5em;
color: ${theme.colors.second_text_switch};
`;

export const IconsBlock = styled.span`
 position: absolute;
 top: 6px;
 left: 10px;
 display: inline-block;
 width: 12px;
 height: 12px;
 border-radius: ${theme.radii.round};
 background-color: #ff5f57;

 &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 16px;
     display: inline-block;
 width: 12px;
 height: 12px;
border-radius: ${theme.radii.round};
    background-color: #ffbd2e;
 }

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 32px;
     display: inline-block;
 width: 12px;
 height: 12px;
 border-radius: ${theme.radii.round};
    background-color: #28ca41;
 }
`;

export const ImgWrapper = styled.div`
position: relative;
 width: 100%;
height: 250px;
overflow: hidden;
`;

export const Img = styled.img`
position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  

  font-weight: 400;
  font-size: 18px;
  line-height: calc(28 / 18);
  letter-spacing: 0.03em;

  color: white;
  /* filter: grayscale(.75); */
  background-color: rgba(0, 0, 0, 0.633);


  transform: translatey(-101%);
  transition: transform ease-in-out 250ms;


`;
