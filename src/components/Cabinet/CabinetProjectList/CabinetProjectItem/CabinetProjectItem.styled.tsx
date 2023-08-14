import styled from '@emotion/styled';
import { theme } from 'theme';


export const Item = styled.li`
  width: 100%;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 4px 4px rgba(254, 57, 12, 0.25);

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: calc(50% - ${theme.gaps.medium / 2}px);
  }

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
  font-size: ${theme.fontSizes.s};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.5em;
  color: ${theme.colors.mainRed};
  color: #ff5f57;
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
  overflow: hidden;
  padding-top: 56.25%; // (9 / 16) * 100%     set relation 16:9
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

  background-color: rgba(0, 0, 0, 0.65);

  transform: translatey(-101%);
  transition: ${theme.transition.hover};
`;
