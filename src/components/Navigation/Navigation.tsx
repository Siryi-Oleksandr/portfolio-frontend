import { Outlet } from "react-router-dom";
import { Suspense, FC } from "react";
import { Link, Header, NavWrap} from "./Navigation.styled";
import { Loader, ThemeToggler } from "components";
// import { RxHamburgerMenu } from 'react-icons/rx';
import Sidebar from "./Sidebar";


const Navigation: FC = () => {

  return (
    <>
      <Header >
        <Sidebar />
        {/* <MobileMenuButton >
          <RxHamburgerMenu size={34} />
        </MobileMenuButton> */}
        <NavWrap>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/cabinet">Cabinet</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        </NavWrap>
        
        
        <ThemeToggler />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
