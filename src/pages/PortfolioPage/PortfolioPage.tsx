import React, { FC, useEffect } from 'react';
import { ProjectList, Container, PortfolioHero } from 'components';
import { useParams } from 'react-router-dom';
import About from 'components/PortfolioPage/About/About';

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
      <About />
      <Container>
        <h3 className="visually-hidden">Projects</h3>
        <ProjectList />
      </Container>
    </>
  );
};

export default Portfolio;
