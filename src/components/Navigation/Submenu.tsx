import React, { FC } from 'react';
import { SidebarItem } from 'types/SidebarItem';
import { SidebarLabel, SidebarLink } from './Submenu.styled';

type SidebarLinkProps = {
    item: SidebarItem;
    closeSidebar: any;
};

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