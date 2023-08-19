import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AwesomeButton } from 'react-awesome-button';
import { theme } from 'theme';

export const BackLincAwesome = styled(AwesomeButton)`
  padding: 0px, 0px;
  font-size: 18px;
  width: 120px;
  height: 35px;
  --button-default-border-radius: 4px;
  --button-horizontal-padding: 16px;
  --button-raise-level: 4px;
  --button-hover-pressure: 1;
  --transform-speed: 0.15s;
  --button-secondary-color: #FE390C;
  --button-secondary-color-dark: #be2c0b;
  --button-secondary-color-light: ${theme.colors.white};
  --button-secondary-color-hover: #c43110;
  --button-secondary-color-active: #c43110;
  --button-secondary-border: 2px solid #ff2f00;
  @media screen and (max-width: 600px) {
    width: 100px;
    height: 35px;
    font-size: 13px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  color: ${theme.colors.white};
  text-decoration: none;
  width: 120px;
`;
