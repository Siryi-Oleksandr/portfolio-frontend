import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'theme';

export const LogoIcon = styled(Link)`
  margin-right: 8px;
  transition: ${theme.transition.hover};
  border-radius: 50%;
  @media screen and (max-width: ${theme.breakpoints.mobileMax}) {
    margin-right: 8px;
  }
  &:hover {
    transform: scale(1.05);
    /* box-shadow: 0 0 12px 4px ${theme.colors.accentColor}; */
  }
`;
export const Img = styled.img`
  width: 40px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 50px;
  }
`;
