import { HiUserAdd } from 'react-icons/hi';
import { AuthSlideIcon, BtnSlideText } from './loginSlide.styled';
import { IconContext } from 'react-icons';
import React, { FC } from 'react';

type SideProps = {
  closeSidebar: () => void;
};

const RegisterSlideBtn: FC<SideProps> = ({ closeSidebar }) => {
  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <AuthSlideIcon to="register" onClick={closeSidebar}>
        <HiUserAdd size="24px" />
        <BtnSlideText>SignUp</BtnSlideText>
      </AuthSlideIcon>
    </IconContext.Provider>
  );
};

export default RegisterSlideBtn;
