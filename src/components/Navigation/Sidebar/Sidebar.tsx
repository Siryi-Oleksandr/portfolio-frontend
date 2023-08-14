import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFolderOpen,
} from 'react-icons/ai';
import { BiCabinet } from 'react-icons/bi';

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
  const example = '64d4797b379a5ea8b43b84d3';

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
            {isLoggedIn ? (
              <AuthSlideIcon to="cabinet" onClick={closeSidebar}>
                <BiCabinet size="24px" />
                <BtnSlideText>Cabinet</BtnSlideText>
              </AuthSlideIcon>
            ) : (
              <></>
            )}
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
