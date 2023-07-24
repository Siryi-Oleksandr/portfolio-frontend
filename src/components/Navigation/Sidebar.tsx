import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts'
import { SidebarNav, NavIcon, Nav, SidebarWrap } from './Sidebar.styled';


const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState<string>("false");
    const showSidebar = () => setSidebar("true");
    const closeSidebar = () => setSidebar("false");

    const ref = useRef(null);
    const handleClickOutside = () => {
        setSidebar("false");
    };

    useOnClickOutside(ref, handleClickOutside);


    return (
        <IconContext.Provider value={{ className: "slider-icons" }} >
            <div ref={ref}>
                <Nav>
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineMenu />
                    </NavIcon>
                </Nav>
            <SidebarNav sidebar={sidebar} >
                <SidebarWrap>
                    <NavIcon to="#" onClick={closeSidebar}>
                        <AiOutlineClose />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index}  closeSidebar={ closeSidebar} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
            </div>
            
        </IconContext.Provider>
    );
};

export default Sidebar;