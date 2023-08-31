import { Navigate } from 'react-router-dom';
import React, { FC } from 'react';
import { SlLogout } from 'react-icons/sl';
import { BtnSlideText,AuthSlideIcon } from './loginSlide.styled';
import { IconContext } from 'react-icons';
import { useAppDispatch } from 'redux/reduxHooks';
import { logoutUser } from 'redux/auth/operations';

type SideProps = {
  closeSidebar: () => void;
};


const LogoutSlideBtn: FC<SideProps> = ({closeSidebar}) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
      dispatch(logoutUser());
      closeSidebar();
    <Navigate to="/" />;
  };

  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <AuthSlideIcon to="/" onClick={handleLogout} >
        <SlLogout size="24px" />
        <BtnSlideText>LogOut</BtnSlideText>
      </AuthSlideIcon>
    </IconContext.Provider>
  );
};

export default LogoutSlideBtn;
