import React, { FC, useEffect } from 'react';
import { ProjectList, Container, PortfolioHero } from 'components';
import { useParams } from 'react-router-dom';
import About from 'components/PortfolioPage/About/About';
import SectionTitle from 'components/PortfolioPage/Title/Title';

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
        <About />
        <SectionTitle number="02" text="My technology stack" />
        <SectionTitle number="03" text="Portfolio" />
        <ProjectList />
      </Container>
    </>
  );
};

export default Portfolio;
