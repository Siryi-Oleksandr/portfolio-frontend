import { FC } from 'react';
import { Link, Header, NavWrap } from './Navigation.styled';
import { ThemeToggler } from 'components';
// import { RxHamburgerMenu } from 'react-icons/rx';
import Sidebar from './Sidebar';
import { useAuth } from 'hooks/useAuth';

const Navigation: FC = () => {
  const { isLoggedIn, user } = useAuth();
  console.log('😎', user);
  return (
    <>
      <Header>
        <Sidebar />
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
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {/* {!isLoggedIn ? (
              <Link to="/register">Register</Link>
            ) : (
              <span>Name</span>
            )}
            {!isLoggedIn && <Link to="/login">Login</Link>} */}
          </nav>
        </NavWrap>

        <ThemeToggler />
      </Header>
    </>
  );
};

export default Navigation;
