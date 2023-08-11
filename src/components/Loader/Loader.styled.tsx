import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotateAnimation = keyframes`
   0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.3);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

export const LoaderStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const StyledImg = styled.img`
  animation: ${rotateAnimation} 2.5s linear infinite;
`;
