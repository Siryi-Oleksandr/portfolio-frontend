import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'theme';

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
     @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
    
`;

export const SidebarNav = styled.div<{ sidebar: string }>`
    width: 250px;
    height: 100vh;
    background-color: ${theme.colors.background_switch};
    border-right: 2px solid ${theme.colors.accentColor};
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar === "true" ? '0' : '-100%')};
    transition: 350ms;
    z-index: 1000;
`;

export const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
    .slider-icons {
    color: ${theme.colors.white};
    transition: ${theme.transition.hover};
  
    &:hover {
      color: ${theme.colors.accentColor};
      transform: scale(1.5);
    }
  }
    
`;

export const SidebarWrap = styled.div``;

export const CloseWrap = styled.div`
.slider-icons {
    color: ${theme.colors.primary_text_switch};
    &:hover {
      color: ${theme.colors.accentColor};
      transform: scale(1.5);
    }
  }
`;