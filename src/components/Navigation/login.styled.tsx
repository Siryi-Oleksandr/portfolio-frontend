import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from "theme";

export const AuthIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    /* margin-left: 2rem; */
    .slider-icons {
    color: ${theme.colors.white};
    transition: ${theme.transition.hover};
  
    &:hover {
      color: ${theme.colors.accentColor};
      transform: scale(1.5);
    }
  }
    
`;

export const BtnText = styled(p)`
color: ${theme.colors.white};
`;