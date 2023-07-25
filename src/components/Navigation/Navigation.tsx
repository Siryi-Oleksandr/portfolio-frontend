import { FC } from 'react';
import { Link, Header, NavWrap} from './Navigation.styled';
import { ThemeToggler } from 'components';
// import { RxHamburgerMenu } from 'react-icons/rx';
import Sidebar from './Sidebar';
import LoginBtn from './login';
import LogoutBtn from './logout';

const Navigation: FC = () => {
  return (
    <>
      <Header>
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
            <Link to="/login">Login</Link>
          </nav>
        </NavWrap>
        <LoginBtn />
        <LogoutBtn/>
               
      </Header>
    </>
  );
};

export default Navigation;
