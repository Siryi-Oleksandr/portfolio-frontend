import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from 'models/SidebarItem';
import { theme } from 'theme';

type SidebarLinkProps = {
    item: SidebarItem;
    closeSidebar: any;
};

const SidebarLink = styled(Link)`
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

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const Submenu: FC<SidebarLinkProps> = ({ item, closeSidebar }) => {
    
    return (
        <>
            <SidebarLink to={item.path} onClick={closeSidebar}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                
            </SidebarLink>
            
        </>
    );
};

export default Submenu;