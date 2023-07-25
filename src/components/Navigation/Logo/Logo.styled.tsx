import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from "theme";

export const LogoIcon = styled(Link)`
    margin-right: 20px;
    transition: ${theme.transition.hover};
    border-radius: 37% 5% 5% 37%;
    @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    margin-right: 8px;
  }
    &:hover {
     transform: scale(1.05);
     box-shadow: 0 0 12px 4px ${theme.colors.accentColor} ;
      }
`;
export const Img = styled.img`
height: 50px;
opacity: 0.7;
&:hover {
    opacity: 1;
    }
`;

