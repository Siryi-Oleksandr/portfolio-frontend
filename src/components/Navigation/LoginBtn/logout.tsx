import { Navigate } from 'react-router-dom';
import { SlLogout } from 'react-icons/sl';
import { BtnAuth, BtnText } from './login.styled';
import { IconContext } from 'react-icons';
import { useAppDispatch } from 'redux/reduxHooks';
import { logoutUser } from 'redux/auth/operations';

const LogoutBtn = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    <Navigate to="/" />;
  };

  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <BtnAuth onClick={handleLogout}>
        <SlLogout size="20px" />
        <BtnText>LogOut</BtnText>
      </BtnAuth>
    </IconContext.Provider>
  );
};

export default LogoutBtn;
