import { Outlet } from "react-router-dom";
import { Suspense, FC } from "react";
import { Link, Header } from "./Navigation.styled";
import { Loader, ThemeToggler } from "components";

const Navigation: FC = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/cabinet">Cabinet</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <ThemeToggler />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
