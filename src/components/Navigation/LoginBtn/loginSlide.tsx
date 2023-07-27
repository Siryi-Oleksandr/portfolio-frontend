import { SlLogin } from 'react-icons/sl';
import React, { FC } from 'react';
import { AuthSlideIcon, BtnSlideText } from './loginSlide.styled';
import { IconContext } from 'react-icons';

type SideProps = {
    closeSidebar: any;
};


const LoginSlideBtn: FC<SideProps> = ({closeSidebar}) => { 
    return (
        <IconContext.Provider value={{ className: "slider-icons" }}>
            <AuthSlideIcon to="login" onClick={closeSidebar}>
                <SlLogin size="24px" />
                <BtnSlideText>LogIn</BtnSlideText>
            </AuthSlideIcon>
        </IconContext.Provider>
        
    )
}

export default LoginSlideBtn;