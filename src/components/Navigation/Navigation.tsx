import { FC } from 'react';
import { useAuth } from 'hooks/useAuth';
import {
  Link,
  Header,
  NavWrap,
  GreetWrap,
  GreetName,
  GreetText,
} from './Navigation.styled';
import { ThemeToggler } from 'components';
import Sidebar from './Sidebar/Sidebar';
import { LoginBtn, LogoutBtn, RegisterBtn } from './LoginBtn';
import Logo from './Logo/Logo';

const Navigation: FC = () => {
  const { isLoggedIn, user } = useAuth();
  const example = '64d4797b379a5ea8b43b84d3';

  return (
    <>
      <Header>
        <Logo />
        <Sidebar />
        <ThemeToggler />
        <NavWrap>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            {isLoggedIn && <Link to="/cabinet">Cabinet</Link>}
            <Link to={`/portfolio/${user._id ? user._id : example}`}>
              Portfolio
            </Link>
          </nav>
        </NavWrap>
        {!isLoggedIn ? (
          <RegisterBtn />
        ) : (
          <GreetWrap>
            <GreetText>Welcome</GreetText>
            <GreetName>{user.name}</GreetName>
          </GreetWrap>
        )}
        {!isLoggedIn ? <LoginBtn /> : <LogoutBtn />}
      </Header>
    </>
  );
};

export default Navigation;
