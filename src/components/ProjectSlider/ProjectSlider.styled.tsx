import styled from '@emotion/styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export const SliderContainer = styled.div`
  width: 100%;
  /* overflow: hidden; */
`;

export const NextArrowStyled = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 20px;
  width: 120px;
  height: 99.3%;
  top: 49.7%;
  right: 0px;
  transition: all 500ms ease;
  color: transparent;

  &:hover {
    background-color: rgba(29, 29, 29, 0.4);
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
  width: 120px;
  height: 99.3%;
  top: 49.7%;
  z-index: 100;
  transition: all 500ms ease;
  color: transparent;

  &:hover {
    background-color: rgba(29, 29, 29, 0.4);
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
