import { FC } from 'react';
import { Link, Header, NavWrap} from './Navigation.styled';
import { ThemeToggler } from 'components';
// import { RxHamburgerMenu } from 'react-icons/rx';
import Sidebar from './Sidebar/Sidebar';
import LoginBtn from './LoginBtn/login';
import LogoutBtn from './LoginBtn/logout';
import Logo from './Logo/Logo';

const Navigation: FC = () => {
  return (
    <>
      <Header>
        <Logo/>
        <Sidebar />
        <ThemeToggler />
        {/* <MobileMenuButton >
          <RxHamburgerMenu size={34} />
        </MobileMenuButton> */}
        <NavWrap>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/cabinet">Cabinet</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/register">Register</Link>
          </nav>
        </NavWrap>
        <LoginBtn />
        <LogoutBtn/>
               
      </Header>
    </>
  );
};

export default Navigation;
