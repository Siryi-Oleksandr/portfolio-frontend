import { FC, Suspense } from 'react';
import { Footer, Loader, Navigation } from 'components';
import { Container, FooterWrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <FooterWrapper>
        <Container>
          <Footer />
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Layout;
