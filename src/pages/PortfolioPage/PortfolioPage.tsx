import React, { FC, useEffect } from 'react';
import { ProjectList, Container, PortfolioHero } from 'components';
import { useParams } from 'react-router-dom';

const Portfolio: FC = () => {
  let { userId } = useParams();

  useEffect(() => {
    if (userId === 'example') {
      return;
    }
    // TODO query to get portfolio projects
  }, [userId]);

  return (
    <>
      <PortfolioHero />
      <Container>
        <ProjectList />
      </Container>
    </>
  );
};

export default Portfolio;
