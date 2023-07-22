import React, {FC, Suspense} from 'react'
import { Loader, ProjectList} from 'components';
import { Container } from './PortfolioPage.styled';
import { Outlet } from 'react-router-dom';

const Portfolio: FC = () => {
  return (
    <Container>
      <ProjectList />
      
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  )
}

export default Portfolio;