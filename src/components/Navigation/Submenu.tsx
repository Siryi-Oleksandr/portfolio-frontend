import React, { FC } from 'react';
import { SidebarItem } from 'types/SidebarItem';
import { SidebarLabel, SidebarLink, IconsWrap} from './Submenu.styled';

type SidebarLinkProps = {
    item: SidebarItem;
    closeSidebar: any;
};

const Submenu: FC<SidebarLinkProps> = ({ item, closeSidebar }) => {
    
    return (
        <>
            <SidebarLink to={item.path} onClick={closeSidebar}>
                <IconsWrap>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </IconsWrap>
                
            </SidebarLink>
            
        </>
    );
};

export default Submenu;