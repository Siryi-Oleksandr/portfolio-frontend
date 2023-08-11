import { SlLogin } from 'react-icons/sl';
import { AuthIcon, BtnText } from './login.styled';
import { IconContext } from 'react-icons';

const LoginBtn = () => {
  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <AuthIcon to="login">
        <SlLogin size="20px" />
        <BtnText>LogIn</BtnText>
      </AuthIcon>
    </IconContext.Provider>
  );
};

export default LoginBtn;
