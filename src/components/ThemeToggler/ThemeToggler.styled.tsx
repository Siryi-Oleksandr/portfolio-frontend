import styled from "@emotion/styled";
import { theme } from "theme";

export const ThemeModeBtn = styled.button`
  color: ${theme.colors.primary_text_switch};
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1px;
  margin-left: 12px;

  cursor: pointer;
`;
