import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFolderOpen,
} from 'react-icons/ai';

import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import {
  SidebarNav,
  NavIcon,
  Nav,
  SidebarWrap,
  CloseWrap,
  SlideGreetName,
  //   SlideGreetText,
  SlideGreetWrap,
} from './Sidebar.styled';
import { useAuth } from 'hooks/useAuth';
import { RegisterSlideBtn, LoginSlideBtn, LogoutSlideBtn } from '../LoginBtn';
import { BtnSlideText, AuthSlideIcon } from '../LoginBtn/loginSlide.styled';

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState<string>('false');
  const showSidebar = () => setSidebar('true');
  const closeSidebar = () => setSidebar('false');
  const example = 'example';

  const ref = useRef(null);
  const handleClickOutside = () => {
    setSidebar('false');
  };

  useOnClickOutside(ref, handleClickOutside);

  const { isLoggedIn, user } = useAuth();

  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <div ref={ref}>
        <Nav>
          <NavIcon to="#" onClick={showSidebar}>
            <AiOutlineMenu />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#" onClick={closeSidebar}>
              <CloseWrap>
                <AiOutlineClose />
              </CloseWrap>
            </NavIcon>
            {!isLoggedIn ? (
              <RegisterSlideBtn closeSidebar={closeSidebar} />
            ) : (
              <SlideGreetWrap>
                {/* <SlideGreetText>Welcome</SlideGreetText> */}
                <SlideGreetName>{user.name}</SlideGreetName>
              </SlideGreetWrap>
            )}
            {SidebarData.map((item, index) => {
              return (
                <Submenu item={item} key={index} closeSidebar={closeSidebar} />
              );
            })}
            <AuthSlideIcon
              to={`/portfolio/${user._id ? user._id : example}`}
              onClick={closeSidebar}
            >
              <AiFillFolderOpen size="24px" />
              <BtnSlideText>Portfolio</BtnSlideText>
            </AuthSlideIcon>
            {!isLoggedIn ? (
              <LoginSlideBtn closeSidebar={closeSidebar} />
            ) : (
              <LogoutSlideBtn closeSidebar={closeSidebar} />
            )}
          </SidebarWrap>
        </SidebarNav>
      </div>
    </IconContext.Provider>
  );
};

export default Sidebar;
