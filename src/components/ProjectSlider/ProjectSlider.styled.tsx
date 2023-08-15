import styled from '@emotion/styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export const SliderContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  box-shadow: rgba(254, 57, 12, 0.25) 0px 0px 4px 4px;

`;

export const NextArrowStyled = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 99.3%;
  top: 49.68%;
  right: 0px;
  width: 140px;
  padding-right: 20px;
  transition: all 500ms ease;
  color: transparent;
  &:hover {
    color: #fff;
  }

  &:before {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    visibility: hidden;
  }
  &:hover:before {
    opacity: 0;
  }
`;
export const ArrowNextIcon = styled(SlArrowRight)`
  width: 40px;
  height: 40px;
`;
export const PrevArrowStyled = styled.div`
  left: 0px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 140px;
  height: 99.3%;
  top: 49.68%;
  z-index: 100;
  transition: all 500ms ease;
  color: transparent;

  &:hover {
    color: #fff;
  }
  &:before {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    visibility: hidden;
  }
  &:hover:before {
    opacity: 0;
  }
`;
export const ArrowPrevIcon = styled(SlArrowLeft)`
  width: 40px;
  height: 40px;
  margin-right: auto;
`;

export const Dot = styled.li`
  transform: scale(0.7);
  border-radius: 50%;
  background-color: rgba(123, 122, 122, 0.7);
  cursor: pointer;
  transition: all 500ms ease-in-out;
  &.slick-active {
    background-color: rgba(229, 216, 216, 1);
    transform: scale(1);
  }
`;

export const DotsContainer = styled.ul`
  position: absolute;
  width: 100px;
  bottom: 10px;
  left: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  transform: translate(-50%, -50%);
`;
