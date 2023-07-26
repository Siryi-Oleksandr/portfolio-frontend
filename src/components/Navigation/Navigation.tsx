import { FC } from 'react';
import { Link, Header, NavWrap } from './Navigation.styled';
import { ThemeToggler } from 'components';
// import { RxHamburgerMenu } from 'react-icons/rx';
import Sidebar from './Sidebar/Sidebar';
import LoginBtn from './LoginBtn/login';
import LogoutBtn from './LoginBtn/logout';
import Logo from './Logo/Logo';
import { useAuth } from 'hooks/useAuth';

const Navigation: FC = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <Header>
        <Logo />
        <Sidebar />
        <ThemeToggler />
        {/* <MobileMenuButton >
          <RxHamburgerMenu size={34} />
        </MobileMenuButton> */}
        <NavWrap>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            {isLoggedIn && <Link to="/cabinet">Cabinet</Link>}
            <Link to={`/portfolio/${user._id}`}>Portfolio</Link>
            <Link to="/contacts">Contacts</Link>

            {!isLoggedIn ? (
              <Link to="/register">Register</Link>
            ) : (
              <span>Welcome {user.name}</span>
            )}
            {!isLoggedIn && <Link to="/login">Login</Link>}
          </nav>
        </NavWrap>
        {!isLoggedIn ? <LoginBtn /> : <LogoutBtn />}
      </Header>
    </>
  );
};

export default Navigation;
