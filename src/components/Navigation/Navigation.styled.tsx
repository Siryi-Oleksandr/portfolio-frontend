import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from "theme";
 
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 80px;
  gap: 12px;
  padding: 8px 32px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1) );
  background-color: #404040;
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    padding: 8px 16px;
  }
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
  margin-left: auto;
  margin-right: auto;
  gap: 12px;
  padding: 8px 0;
  @media screen and (max-width: 1439px) {
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


