import { FC, Suspense } from 'react';
import {
  Footer,
  Loader,
  Navigation,
  Container,
  DonationMenu,
} from 'components';
import { FooterWrapper, Main } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <Main>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <DonationMenu />
      <FooterWrapper>
        <Container>
          <Footer />
        </Container>
      </FooterWrapper>
    </Main>
  );
};

export default Layout;
