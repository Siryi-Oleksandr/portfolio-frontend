import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from "theme";
 
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: red;

  > nav {
    display: flex;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${theme.colors.primary_text_switch};
  font-weight: 500;

  &.active {
    color:${theme.colors.second_background_switch};
    background-color: ${theme.colors.accentColor};
  }
`;

export const MobileMenuButton = styled.button`
  color: ${theme.colors.primary_text_switch};
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  margin-right: 8px;
 
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover{
    color: ${theme.colors.accentColor}
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 34px;
    height: 34px;
  }

  

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;
