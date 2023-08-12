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

export const StyledImg = styled.img`
  animation: ${rotateAnimation} 2.5s linear infinite;
`;
