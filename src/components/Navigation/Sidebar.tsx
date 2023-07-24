import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { theme } from "theme";
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts'
 

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
     @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
    
`;

const SidebarNav = styled.div<{ sidebar: string }>`
    width: 250px;
    height: 100vh;
    background-color: ${theme.colors.background_switch};
    border-right: 2px solid ${theme.colors.accentColor};
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar === "true" ? '0' : '-100%')};
    transition: 350ms;
    z-index: 1000;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
    .slider-icons {
    color: ${theme.colors.primary_text_switch};
    &:hover {
      color: ${theme.colors.accentColor};
    }
  }
    
`;

const SidebarWrap = styled.div``;

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