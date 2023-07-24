import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'theme';

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: ${theme.colors.primary_text_switch};

    &:hover {
        background-color: ${theme.colors.primary_text_switch};
        color: ${theme.colors.accentColor};
        border-left: 8px solid ${theme.colors.accentColor};
    }
`;

export const SidebarLabel = styled.span`
    margin-left: 1rem;
`;