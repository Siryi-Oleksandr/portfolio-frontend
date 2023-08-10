import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
