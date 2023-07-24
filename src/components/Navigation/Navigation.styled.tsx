import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from "theme";
 
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 12px;
  padding: 8px 20px;
  border-bottom: 1px solid black;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1) );
  background-color: #404040;

   nav {
    display: flex;
    flex-direction: row;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  display: flex;

  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${theme.colors.white};
  font-weight: 500;
  transition: ${theme.transition.hover};

  &.active {
    color:${theme.colors.black};
    background-color: ${theme.colors.accentColor};
    &:hover {
      color: ${theme.colors.white}
    }
  }
  &:hover {
    color: ${theme.colors.accentColor};
    transform: scale(1.2);
  }
`;

