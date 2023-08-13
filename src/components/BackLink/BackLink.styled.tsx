import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AwesomeButton } from 'react-awesome-button';
import { theme } from 'theme';

export const BackLincAwesome = styled(AwesomeButton)`
  padding: 0px, 0px;
  font-size: 18px;
  width: 140px;
  height: 35px;
  --button-default-border-radius: 4px;
  --button-horizontal-padding: 16px;
  --button-raise-level: 4px;
  --button-hover-pressure: 1;
  --transform-speed: 0.15s;
  --button-secondary-color: ${theme.colors.awesome_background_switch};
  --button-secondary-color-dark: #b75b06;
  --button-secondary-color-light: ${theme.colors.awesome_text_switch};
  --button-secondary-color-hover: ${theme.colors.awesome_hover_switch};
  --button-secondary-color-active: ${theme.colors.awesome_hover_switch};
  --button-secondary-border: 2px solid #d77642;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  color: ${theme.colors.awesome_text_switch};
  text-decoration: none;
  width: 140px;
`;
