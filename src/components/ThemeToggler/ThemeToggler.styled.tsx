import styled from "@emotion/styled";
import { theme } from "theme";

export const ThemeModeBtn = styled.button`
  color: ${theme.colors.white};
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1px;
   @media screen and (max-width: 999px) {
    margin-right: auto;
  }
  

  cursor: pointer;
  transition: ${theme.transition.hover};
  &:hover {
    color: ${theme.colors.accentColor};
    transform: scale(1.5);
  }
`;
