import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'theme';

export const AuthSlideIcon = styled(Link)`
  display: flex;
    justify-content: start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    font-weight: ${theme.fontWeights.heading};
    padding: 2rem;
    text-decoration: none;
    color: ${theme.colors.primary_text_switch};
    

    &:hover {
        background-color: ${theme.colors.slider_hover_color_switch};
        color: ${theme.colors.accentColor};
        border-left: 8px solid ${theme.colors.accentColor};
    }
`;

export const BtnSlideText = styled.p`
margin-left: 1rem;
  
`;

