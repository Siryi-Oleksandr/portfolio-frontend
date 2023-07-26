import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'theme';

export const AuthIcon = styled(Link)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  transition: ${theme.transition.hover};
  &:hover {
    .slider-icons {
      color: ${theme.colors.accentColor};
    }
    p {
      color: ${theme.colors.accentColor};
    }
  }
  /* margin-left: 2rem; */
  .slider-icons {
    color: ${theme.colors.white};
    transition: ${theme.transition.hover};
  }
`;

export const BtnText = styled.p`
  color: ${theme.colors.white};
  font-size: 16px;
  transition: ${theme.transition.hover};
`;

export const BtnAuth = styled.button`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  transition: ${theme.transition.hover};
  background-color: transparent;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    .slider-icons {
      color: ${theme.colors.accentColor};
    }
    p {
      color: ${theme.colors.accentColor};
    }
  }
  /* margin-left: 2rem; */
  .slider-icons {
    color: ${theme.colors.white};
    transition: ${theme.transition.hover};
  }
`;
