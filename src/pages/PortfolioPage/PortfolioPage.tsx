import React, { FC, useEffect } from 'react';
import { ProjectList, Container, PortfolioHero, StackList } from 'components';
import { useParams } from 'react-router-dom';
import About from 'components/PortfolioPage/About/About';
import SectionTitle from 'components/PortfolioPage/Title/Title';
import { useViewportWidth } from 'hooks/useViewportWidth';

const Portfolio: FC = () => {
  let { userId } = useParams();
  let viewportWidth = useViewportWidth();

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
        {viewportWidth > 768 ? (
          <SectionTitle number="02" text="My technology stack" />
        ) : (
          <SectionTitle number="02" text="My stack" />
        )}
        <StackList techStack={['HTML, scc, JAvaScript, TypeScript']} />
        <SectionTitle number="03" text="Portfolio" />
        <ProjectList />
      </Container>
    </>
  );
};

export default Portfolio;
