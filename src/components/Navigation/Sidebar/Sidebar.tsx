import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts'
import { SidebarNav, NavIcon, Nav, SidebarWrap, CloseWrap, SlideGreetName, SlideGreetText, SlideGreetWrap } from './Sidebar.styled';
import { useAuth } from 'hooks/useAuth';
import RegisterSlideBtn from '../LoginBtn/registerSlider';
import LoginSlideBtn from '../LoginBtn/loginSlide';
import LogoutSlideBtn from '../LoginBtn/logoutSlide';

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState<string>("false");
    const showSidebar = () => setSidebar("true");
    const closeSidebar = () => setSidebar("false");

    const ref = useRef(null);
    const handleClickOutside = () => {
        setSidebar("false");
    };

    useOnClickOutside(ref, handleClickOutside);

    const { isLoggedIn, user } = useAuth();


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
                        <NavIcon to="#" onClick={closeSidebar} >
                            <CloseWrap><AiOutlineClose /></CloseWrap>
                        </NavIcon>
                        {!isLoggedIn ? (
                            <RegisterSlideBtn closeSidebar={ closeSidebar}/>) : (
                                <SlideGreetWrap>
                                    <SlideGreetText>Welcome</SlideGreetText>
                                    <SlideGreetName>{user.name}</SlideGreetName>
                            </SlideGreetWrap>
                        )}
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index}  closeSidebar={ closeSidebar} />;
                    })}
                        
                        {!isLoggedIn ? <LoginSlideBtn closeSidebar={closeSidebar} /> : <LogoutSlideBtn closeSidebar={closeSidebar} />}
                        
                </SidebarWrap>
            </SidebarNav>
            </div>
            
        </IconContext.Provider>
    );
};

export default Sidebar;